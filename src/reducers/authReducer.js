import { handleActions } from 'redux-actions';
import {
  emailChanged,
  passwordChanged,
  setAuthSubmitting,
  setAuthError,
  setAuthSuccess
} from '../actions';

const initialState = {
  email: '',
  password: '',
  submitting: false,
  error: null,
  token: null
};

export default handleActions({
  [emailChanged]: (state, { payload: { email } }) => ({ ...state, email }),
  [passwordChanged]: (state, { payload: { password } }) => ({ ...state, password }),
  [setAuthSubmitting]: (state, { payload: { submitting } }) => ({ ...state, submitting }),
  [setAuthError]: (state, { payload: { error } }) => ({
    ...state,
    password: '',
    error
  }),
  [setAuthSuccess]: (state, { payload: { token } }) => ({
    ...state,
    ...initialState,
    token
  })
}, initialState);

// Selectors
export const getAuthToken = (state) => state.auth.token;
