import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { text } from 'react-native-communications';
import { Card, CardSection, ButtonWithSpinner, Button, Confirm } from './common';
import * as actions from '../actions/employeeActions';
import * as selectors from '../selectors';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  state = { modalVisible: false };

  componentWillMount() {
    const { employee, updateEmployeeField } = this.props;
    Object.keys(employee).forEach(key => updateEmployeeField(key, employee[key]));
  }

  handleSubmit = () => {
    const {
      employee: { uid },
      updatedEmployee: { name, phone, shift },
      updateEmployee
    } = this.props;

    updateEmployee(uid, name, phone, shift);
  }

  handleTextUser = () => {
    const { updatedEmployee: { phone, shift } } = this.props;

    text(phone, `Your upcoming shift is on ${shift}`);
  }

  handleToggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleConfirmAccept = () => {
    const { employee: { uid } } = this.props;

    this.props.deleteEmployee(uid);
  }

  handleConfirmDecline = () => {
    this.handleToggleModal();
  }

  render() {
    const { modalVisible } = this.state;

    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <ButtonWithSpinner
            showSpinner={this.props.submtting}
            onPress={this.handleSubmit}
          >
            Update
          </ButtonWithSpinner>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleTextUser}>
            Text Schedule
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.handleToggleModal}>
            Fire
          </Button>
        </CardSection>
        <Confirm
          visible={modalVisible}
          onAccept={this.handleConfirmAccept}
          onDecline={this.handleConfirmDecline}
        >
          Are you sure you want to fire {this.props.name}?
        </Confirm>
      </Card>
    );
  }
}

export default connect(
  (state, { uid, name, phone, shift }) => ({
    employee: { uid, name, phone, shift },
    updatedEmployee: selectors.employee(state),
    submitting: selectors.submitting(state)
  }),
  dispatch => bindActionCreators({
    updateEmployeeField: actions.updateEmployeeField,
    updateEmployee: actions.updateEmployee,
    deleteEmployee: actions.deleteEmployee
  }, dispatch)
)(EmployeeEdit);
