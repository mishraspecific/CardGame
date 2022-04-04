import {Platform, StatusBar, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const standardLength = width > height ? width : height;
const offset = width > height ? 0 : StatusBar.currentHeight;

const deviceHeight =
  Platform.OS === 'android' ? standardLength - offset : standardLength;

export function size(Size, standardScreenHeight = 850) {
  const heightPercent = (Size * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
