import { createAction } from 'redux-actions';
import { Actions } from 'react-native-router-flux';

export const emailChanged = createAction('EMAIL_CHANGED', email => ({ email }));
export const passwordChanged = createAction('PASSWORD_CHANGED', password => ({ password }));

export const setAuthSubmitting = createAction(
  'SET_AUTH_SUBMITTING',
  submitting => ({ submitting })
);

export const setAuthError = createAction('SET_AUTH_ERROR', error => ({ error }));

export const setAuthSuccess = createAction('SET_AUTH_SUCCESS', token => ({ token }));

const dispatchSubmitSuccess = (dispatch, token) => {
  dispatch(setAuthSubmitting(false));
  dispatch(setAuthSuccess(token));

  Actions.main();
};

const dispatchSubmitFail = (dispatch) => {
  dispatch(setAuthSubmitting(false));
  dispatch(setAuthError('Authentication failed'));
};

export const performLogin = (email, password) =>
  (dispatch, getState, { api }) => {
    dispatch(setAuthSubmitting(true));

    // TODO: Save to AsyncStorage
    return api.getToken(email, password)
              .then(({ data: { auth_token } }) => {
                dispatchSubmitSuccess(dispatch, auth_token);
              })
              .catch((error) => {
                console.log(error);
                dispatchSubmitFail(dispatch);
              });
  };
