import { SplashScreen } from 'expo-router';
import { useEffect, useState } from 'react';

export default function useAppSetup() {
  const [isComplete, setComplete] = useState(false);

  /* Load any resources or data that we need prior to rendering the app */
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      SplashScreen.preventAutoHideAsync();
      setComplete(true);
      SplashScreen.hideAsync();
    }

    if (!isComplete) {
      loadResourcesAndDataAsync();
    }
  });

  return isComplete;
}
