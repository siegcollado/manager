import { createAction } from 'redux-actions';
import { Actions } from 'react-native-router-flux';

export const emailChanged = createAction('EMAIL_CHANGED', email => ({ email }));
export const passwordChanged = createAction('PASSWORD_CHANGED', password => ({ password }));

export const setAuthSubmitting = createAction(
  'SET_AUTH_SUBMITTING',
  submitting => ({ submitting })
);

export const setAuthError = createAction('SET_AUTH_ERROR', error => ({ error }));

export const setAuthSuccess = createAction('SET_AUTH_SUCCESS', user => ({ user }));

const dispatchSubmitSuccess = (dispatch, user) => {
  dispatch(setAuthSubmitting(false));
  dispatch(setAuthSuccess(user));

  Actions.main();
};

const dispatchSubmitFail = (dispatch) => {
  dispatch(setAuthSubmitting(false));
  dispatch(setAuthError('Authentication failed'));
};

export const performLogin = (email, password) =>
  (dispatch, getState, { firebase }) => {
    dispatch(setAuthSubmitting(true));

    return firebase.auth()
                   .signInWithEmailAndPassword(email, password)
                   .then(user => dispatchSubmitSuccess(dispatch, user))
                   .catch(() => {
                     firebase.auth()
                             .createUserWithEmailAndPassword(email, password)
                             .then(user => dispatchSubmitSuccess(dispatch, user))
                             .catch(() => dispatchSubmitFail(dispatch));
                   });
};
