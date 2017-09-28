import React, { Component } from 'react';
import { Text } from 'react-native';
import { Spinner, Button, Card, CardSection, Input } from './common';

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default class LoginForm extends Component {

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
