import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchRandomBeers } from '~/api/api';
import { Box } from '~/components/Box';
import { InputBox } from '~/components/InputBox';
import { RadioButtons } from '~/components/RadioButtons';
import { Text } from '~/components/Text';
import { BeerCard } from '~/components/beers/BeerCard';
import useAppTheme from '~/hooks/useAppTheme';

export default function Beers() {
  const [searchValue, setSearchValue] = useState('');
  const [filteredMalt, setFilteredMalt] = useState('All');
  const theme = useAppTheme();
  const beersQuery = useQuery({
    queryKey: ['beers'],
    queryFn: () => fetchRandomBeers({ size: 50 }), // Fixed size
  });

  if (beersQuery.isLoading || beersQuery.isFetching) {
    return (
      <SafeAreaView
        style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
      >
        <ActivityIndicator size="large" color={theme.colors.black} />
      </SafeAreaView>
    );
  }

  if (!beersQuery.data) {
    return (
      <SafeAreaView
        style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
      >
        <Text textAlign="center" fontSize={24}>
          There was an error while fetching random beers
        </Text>
      </SafeAreaView>
    );
  }

  const randomBeers = beersQuery.data;
  const malts = [...new Set(randomBeers.map((e) => e.malts))];
  const filteredBeers = randomBeers.filter(
    (e) =>
      e.name.includes(searchValue) &&
      (filteredMalt === 'All' || e.malts === filteredMalt),
  );

  return (
    <SafeAreaView style={{ padding: 16, flex: 1, paddingBottom: 0 }}>
      <Text fontWeight="bold" fontSize={32}>
        Beers
      </Text>
      <Box height={16} />
      <InputBox
        type="search"
        placeholder="Search for a beer..."
        onType={(value) => setSearchValue(value)}
      />
      <Box height={16} />
      <RadioButtons
        onCheck={(malt) => setFilteredMalt(malt)}
        checked={filteredMalt}
        malts={malts}
      />
      <Box height={16} />
      <FlatList
        numColumns={2}
        overScrollMode="never"
        ListFooterComponent={<Box height={8} />}
        keyExtractor={(item) => item.id}
        data={filteredBeers}
        renderItem={({ item }) => <BeerCard item={item} />}
      />
    </SafeAreaView>
  );
}
