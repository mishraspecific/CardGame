import React, {useEffect, useRef, useCallback} from 'react';
import {
  Text,
  Dimensions,
  StyleSheet,
  Animated,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from '../../themes/Color';
import Card from '../Card';

//this will be used to decide the hard height / width based on screen size
const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height) - 80;

const GameCard = ({item, onCardTouch}) => {
  const {flipped, value} = item.item;
  const animatedValue = useRef(new Animated.Value(0)).current;
  let flipRotation = 0;

  const frontInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });
  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '0deg'],
  });

  const frontAnimatedStyle = {
    transform: [{rotateY: frontInterpolate}],
  };
  const backAnimatedStyle = {
    transform: [{rotateY: backInterpolate}],
  };

  // console.log('cardflip');
  const flipToFront = useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true, // Add This line
    }).start();
  });

  const flipToBack = useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 0,
      friction: 8,
      tension: 10,
      useNativeDriver: true, // Add This line
    }).start();
  });

  const flipCard = () => {
    onCardTouch(item);
  };

  useEffect(() => {
    if (flipped) {
      flipToFront();
    } else {
      flipToBack();
    }
  }, [flipped]);

  useEffect(() => {
    animatedValue.addListener(({value}) => {
      flipRotation = value;
    });
  }, []);

  return (
    <TouchableOpacity onPress={() => flipCard()}>
      <View>
        <Animated.View style={[styles.gameCard, backAnimatedStyle]}>
          <Text style={styles.cardTextBack}>{value}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.gameCard, styles.cardBack, frontAnimatedStyle]}>
          <Text style={styles.cardTextFront}>{'?'}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;

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
    fontSize: 32,
    textAlign: 'center',
    color: Colors.white,
    padding: 4,
  },
  cardTextBack: {
    fontSize: 32,
    textAlign: 'center',
    color: Colors.SECONDARY_COLOR,
    padding: 4,
  },
});
