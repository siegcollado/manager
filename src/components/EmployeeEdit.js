import React, { Component } from 'react';
import { text } from 'react-native-communications';
import { Card, CardSection, ButtonWithSpinner, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

export default class EmployeeEdit extends Component {

  state = { modalVisible: false };

  componentWillMount() {
    const { initialFields: { employee } } = this.props;

    this.initializeFormState(employee);
  }

  initializeFormState = (employee) => {
    const { updateEmployeeField } = this.props;

    Object.keys(employee).forEach(key => {
      updateEmployeeField(key, employee[key]);
    });
  }

  handleSubmit = () => this.props.updateEmployee();

  handleTextUser = () => {
    const { updatedEmployee: { phone, shift } } = this.props;

    text(phone, `Your upcoming shift is on ${shift}`);
  }

  handleToggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  handleConfirmAccept = () => this.props.deleteEmployee();

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
