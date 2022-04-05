import React, {useEffect, useRef, useCallback} from 'react';
import {
  Text,
  Animated,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import commonStyles from '../../themes/styles';
import styles from './styles';

const GameCard = ({item, onCardTouch}) => {
  const {height, width} = useWindowDimensions();
  const {flipped, value, id} = item.item;
  const animatedValue = useRef(new Animated.Value(0)).current;

  const cardHeight = (height - 80) / 4;
  const cardWidth = (width - 10) / 3;

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

  /**
   * flipTofront can be used to animate card to front
   */
  const flipToFront = useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 180,
      friction: 8,
      tension: 10,
      useNativeDriver: true, // Add This line
    }).start();
  });

  /**
   * flipTofront can be used to animate card to back
   */
  const flipToBack = useCallback(() => {
    Animated.spring(animatedValue, {
      toValue: 0,
      friction: 8,
      tension: 10,
      useNativeDriver: true,
    }).start();
  });

  /**
   * It will get triggered on card press and callback will be
   * trigggered to handle all game next move state
   */
  const onCardPress = () => {
    onCardTouch(item);
  };

  /**
   * It created to manage card flip on flipped state change for each card
   */
  useEffect(() => {
    if (flipped) {
      flipToFront();
    } else {
      flipToBack();
    }
  }, [flipped]);

  return (
    <TouchableOpacity
      style={commonStyles.centeredView}
      onPress={() => onCardPress()}
      testID={`card-${id}`}>
      <View>
        <Animated.View
          style={[
            styles.gameCard,
            backAnimatedStyle,
            {height: cardHeight, width: cardWidth},
          ]}>
          <Text style={styles.cardTextBack}>{value}</Text>
        </Animated.View>
        <Animated.View
          style={[
            styles.gameCard,
            styles.cardBack,
            frontAnimatedStyle,
            {height: cardHeight, width: cardWidth},
          ]}>
          <Text style={styles.cardTextFront}>{'?'}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default GameCard;
