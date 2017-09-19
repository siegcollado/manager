import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Spinner,
  Button,
  Card,
  CardSection,
  Input
} from './common';
import * as actions from '../actions';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

class LoginForm extends Component {
  handleSubmit() {
    const { email, password, performLogin } = this.props;
    performLogin(email, password);
  }

  renderButton() {
    const { submitting } = this.props;

    if (submitting) {
      return <Spinner />;
    }

    return (
      <Button onPress={() => this.handleSubmit()}>
        Log In
      </Button>
    );
  }


  render() {
    const { error, email, password, emailChanged, passwordChanged } = this.props;

    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='email@email.com'
            onChangeText={(value) => emailChanged(value)}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='password'
            onChangeText={(value) => passwordChanged(value)}
            value={password}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{error}</Text>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export default connect(
  ({ auth: { email, password, submitting, error, user } }) => ({
    email,
    password,
    submitting,
    error,
    user
  }),
  dispatch => bindActionCreators({
    emailChanged: actions.emailChanged,
    passwordChanged: actions.passwordChanged,
    performLogin: actions.performLogin
  }, dispatch)
)(LoginForm);
