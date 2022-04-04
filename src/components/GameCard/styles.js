import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../themes/Color';
import {FontSize} from '../../themes/FontSizes';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height) - 100;

const styles = StyleSheet.create({
  gameCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth / 3,
    height: screenHeight / 4,
    backgroundColor: Colors.white,
    borderRadius: 5,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 2,
    marginHorizontal: 2,
    padding: 8,
    backfaceVisibility: 'hidden',
    top: 1,
  },
  cardBack: {
    position: 'absolute',
    backgroundColor: Colors.CARD_FRONT,
    top: 0,
  },
  cardTextFront: {
    fontSize: FontSize.h1,
    textAlign: 'center',
    color: Colors.white,
    padding: 4,
  },
  cardTextBack: {
    fontSize: FontSize.h1,
    textAlign: 'center',
    color: Colors.blue,
    padding: 4,
  },
});

export default styles;
