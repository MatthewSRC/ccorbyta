import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

export const { height: windowHeight, width: windowWidth } =
  Dimensions.get('window');
export const { statusBarHeight } = Constants;
