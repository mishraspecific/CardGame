import {StyleSheet} from 'react-native';
import {Colors} from './Color';

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
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
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  weatherDescription: {
    textTransform: 'capitalize',
  },
});

export default commonStyles;
