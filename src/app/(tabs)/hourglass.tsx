import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ArrowButton } from '~/components/ArrowButton';
import { Box } from '~/components/Box';
import { InputBox } from '~/components/InputBox';
import { Text } from '~/components/Text';

export default function Hourglass() {
  const [degrees, setDegrees] = useState(0);
  const [dimension, setDimension] = useState(11);

  function handleDimensionChange(value: string) {
    if (!value) return;
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) throw new Error('Invalid dimension input');
    setDimension(Math.min(Math.max(parsed, 1), 20));
  }

  function handleDegreesChange(operation: number) {
    setDegrees((degrees) => adjustDegrees(operation, degrees));
  }

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text fontWeight="bold" fontSize={32}>
        Hourglass
      </Text>
      <Box height={16} />
      <Box flex={1} justifyContent="space-around">
        <Box
          alignSelf="center"
          backgroundColor="black"
          style={{ transform: [{ rotate: `${degrees}deg` }] }}
        >
          <Text fontFamily="monospace" letterSpacing={10} color="white">
            {generateHourglass(dimension)}
          </Text>
        </Box>
        <Box flexDirection="row" gap="l" alignSelf="center" alignItems="center">
          <ArrowButton
            direction="left"
            onPress={() => handleDegreesChange(-90)}
          />
          <InputBox
            onType={handleDimensionChange}
            placeholder="N"
            type="numeric"
          />
          <ArrowButton
            direction="right"
            onPress={() => handleDegreesChange(90)}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
}

function generateHourglass(n: number): string {
  let str = '';
  for (let i = n - 1; i > 0; i -= 2) {
    const spaces = ' '.repeat((n - i) / 2);
    const asterisks = '*'.repeat(i + 1);
    str += `${spaces + asterisks}\n`;
  }
  for (let i = 1; i < n + 1; i += 2) {
    const spaces = ' '.repeat((n - i) / 2);
    const asterisks = '*'.repeat(i + (1 - (n % 2)));
    const isLastLine = i + 1 + (1 - (n % 2)) >= n;
    const newLine = isLastLine ? '' : '\n';
    str += `${spaces + asterisks + newLine}`;
  }
  return str;
}

/**
 * Generates hourglass shape without using built-in functions.
 * 
 * function generateHourglass(n: number): string {
  let str = '';
  for (let i = n - 1; i > 0; i -= 2) {
    let line = '';
    for (let j = 0; j < (n - i) / 2 - 1; j++) {
      line += ' ';
    }
    for (let j = 0; j <= i; j++) {
      line += '*';
    }
    str += `${line}\n`;
  }
  for (let i = 1; i < n + 1; i += 2) {
    let line = '';
    for (let j = 0; j < (n - i) / 2 - 1; j++) {
      line += ' ';
    }
    for (let j = 0; j <= i + (1 - (n % 2)); j++) {
      line += '*';
    }
    const isLastLine = i + 1 + (1 - (n % 2)) >= n;
    const newLine = isLastLine ? '' : '\n';
    str += `${line + newLine}`;
  }
  return str
}
 */

function adjustDegrees(operation: number, degrees: number): number {
  let newDegrees = degrees + operation;
  if (newDegrees > 360) newDegrees = 90;
  if (newDegrees < -360) newDegrees = -90;

  return newDegrees;
}
