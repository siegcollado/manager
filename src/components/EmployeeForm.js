import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import { employee } from '../selectors';
import { CardSection, Input, ModalPicker } from './common';
import * as actions from '../actions/employeeActions';

const EmployeeForm = ({ employee: { name, phone, shift }, updateEmployeeField }) => (
  <View>
    <CardSection>
      <Input
        label='Name'
        placeholder='Jane'
        onChangeText={(value) => updateEmployeeField('name', value)}
        value={name}
      />
    </CardSection>
    <CardSection>
      <Input
        label='Phone'
        placeholder='555-555-5555'
        onChangeText={(value) => updateEmployeeField('phone', value)}
        value={phone}
      />
    </CardSection>
    <CardSection>
      <ModalPicker
        label='Shift'
        placeholder='Select a shift'
        onValueChange={(value) => updateEmployeeField('shift', value)}
        value={shift}
        options={[
          { label: 'Sunday', value: 'Sunday' },
          { label: 'Monday', value: 'Monday' },
          { label: 'Tuesday', value: 'Tuesday' },
          { label: 'Wednesday', value: 'Wednesday' },
          { label: 'Thursday', value: 'Thursday' },
          { label: 'Friday', value: 'Friday' },
          { label: 'Saturday', value: 'Saturday' },
        ]}
      />
    </CardSection>
  </View>
);

export default connect(
  (state) => ({ employee: employee(state) }),
  dispatch => bindActionCreators({
    updateEmployeeField: actions.updateEmployeeField
  }, dispatch)
)(EmployeeForm);
