import React from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const Input = ({ label, secureTextEntry, placeholder, value, onChangeText }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      autoCapitalize='none'
      secureTextEntry={secureTextEntry}
      placeholder={placeholder}
      autoCorrect={false}
      onChangeText={onChangeText}
      style={styles.inputStyle}
      value={value}
    />
  </View>
);

export default Input;
