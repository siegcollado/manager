import React from 'react';
import { TouchableWithoutFeedback, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './common';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const ListItem = ({ id, name, shift, phone }) => {
  const handleRowPress = () => {
    Actions.employeeEdit({ id, name, shift, phone });
  };

  return (
    <TouchableWithoutFeedback
      onPress={handleRowPress}
    >
      <View>
        <CardSection>
          <Text style={styles.titleStyle}>{name}</Text>
        </CardSection>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ListItem;
