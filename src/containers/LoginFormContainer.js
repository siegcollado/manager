import { connect } from 'react-redux';
import * as actions from '../actions';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => {
  const { auth: { email, password, submitting, error, user } } = state;

  return { email, password, submitting, error, user };
};

export default connect(mapStateToProps, { ...actions })(LoginForm);
