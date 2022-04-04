import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../themes/Color';

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

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.SECONDARY_COLOR,
    padding: 8,
    shadowColor: Colors.shadow,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 2,
    elevation: 4,
  },
  title: {
    fontSize: 20,
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
