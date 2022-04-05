import {StyleSheet} from 'react-native';
import {Colors} from './Color';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  columnContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
});

export default commonStyles;
