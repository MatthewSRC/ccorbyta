import { ThemeProvider } from '@shopify/restyle';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';

import useAppSetup from '~/hooks/useAppSetup';
import useAppTheme from '~/hooks/useAppTheme';

const queryClient = new QueryClient();

export default function RootLayout() {
  const isSetupComplete = useAppSetup();

  if (!isSetupComplete) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const theme = useAppTheme();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
