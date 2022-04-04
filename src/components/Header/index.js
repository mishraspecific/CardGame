import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../themes/Color';
import styles from './styles';

const Header = ({counter, onPress}) => {
  console.log('Header', counter);
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.title}>{'Restart Game'}</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.title}>
          STEPS :<Text>{counter}</Text>
        </Text>
      </View>
    </View>
  );
};

export default Header;
