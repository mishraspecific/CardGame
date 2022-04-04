import {StyleSheet} from 'react-native';
import {Colors} from '../../themes/Color';
import {FontSize} from '../../themes/FontSizes';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    padding: 8,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 2,
    elevation: 4,
  },
  title: {
    fontSize: FontSize.h2,
    textAlign: 'center',
    color: Colors.white,
    padding: 4,
  },
  buttonStyle: {
    width: '80%',
  },
  fillerViewStyle: {
    width: '60%',
  },
});

export default styles;
