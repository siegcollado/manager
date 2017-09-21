import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card, CardSection, ButtonWithSpinner } from './common';
import * as actions from '../actions/employeeActions';
import { employee } from '../selectors';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.resetEmployeeFields();
  }

  handleSubmit = () => {
    const { employee: { name, phone, shift }, createEmployee } = this.props;
    createEmployee(name, phone, shift);
  }

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

export default connect(
  (state) => ({
    employee: employee(state),
    submitting: state.submitting
  }),
  dispatch => bindActionCreators({
    createEmployee: actions.createEmployee,
    resetEmployeeFields: actions.resetEmployeeFields
  }, dispatch)
)(EmployeeCreate);
