import React, { Component } from 'react';
import { Card, CardSection, ButtonWithSpinner } from './common';
import EmployeeForm from './EmployeeForm';

export default class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.resetEmployeeFields();
  }

  handleSubmit = () => this.props.createEmployee();

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <ButtonWithSpinner
            onPress={this.handleSubmit}
            showSpinner={this.props.submitting}
          >
            Create
          </ButtonWithSpinner>
        </CardSection>
      </Card>
    );
  }
}
