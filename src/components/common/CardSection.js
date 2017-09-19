import React from 'react';
import { View } from 'react-native';

const style = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
};

const CardSection = ({ children }) => (
  <View style={style.containerStyle}>
    {children}
  </View>
);

export default CardSection;
