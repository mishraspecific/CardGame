import React, {useRef, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const Congratulation = isGameOver => {
  const animation = useRef(null);

  useEffect(() => {
    if (isGameOver) {
      animation.current.play(25, 180);
    }
  }, [isGameOver]);
  return (
    <View style={{...StyleSheet.absoluteFill}}>
      <LottieView
        ref={animation}
        style={{width: '100%', height: '100%'}}
        source={require('../../assets/lottie/congratulations.json')}
        resizeMode="cover"
        autoPlay={false}
        loop={false}
      />
    </View>
  );
};

export default Congratulation;
