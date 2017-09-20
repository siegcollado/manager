import React from 'react';
import { View } from 'react-native';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
};

const CardSection = ({ children, style }) => (
  <View style={[styles.containerStyle, style]}>
    {children}
  </View>
);

export default CardSection;
