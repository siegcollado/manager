import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import {
  Card,
  CardSection,
  Input,
  Button
} from './common';
import * as actions from '../actions/employeeActions';

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

class EmployeeCreate extends Component {
  render() {
    const { name, shift, phoneNumber, employeeUpdate } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label='Name'
            placeholder='Jane'
            onChangeText={(value) => employeeUpdate('name', value)}
            value={name}
          />
        </CardSection>
        <CardSection>
          <Input
            label='Phone'
            placeholder='555-555-5555'
            onChangeText={(value) => employeeUpdate('phoneNumber', value)}
            value={phoneNumber}
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1 }}
            selectedValue={shift}
            onValueChange={(value) => employeeUpdate('shift', value)}
          >
            <Picker.Item label='Sunday' value='Sunday' />
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
          </Picker>
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  ({ employeeForm: { name, phoneNumber, shift } }) => ({
    name,
    phoneNumber,
    shift
  }),
  dispatch => bindActionCreators({
    employeeUpdate: actions.employeeUpdate
  }, dispatch)
)(EmployeeCreate);
