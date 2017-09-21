import { createAction } from 'redux-actions';
import { Actions } from 'react-native-router-flux';

export const updateEmployeeField =
  createAction('EMPLOYEE_UPDATE_FIELD', (prop, value) => ({ prop, value }));

export const setEmployeeFormSubmitting = createAction(
  'EMPLOYEE_FORM_SUBMITTING', submitting => ({ submitting })
);

export const resetEmployeeFields = createAction('RESET_EMPLOYEE_FIELDS');

export const createEmployee = (name, phone, shift) =>
  (dispatch, getState, { firebase }) => {
    dispatch(setEmployeeFormSubmitting(true));
    const { currentUser: { uid } } = firebase.auth();

    return firebase.database()
                   .ref(`/users/${uid}/employees`)
                   .push({ name, phone, shift })
                   .then(() => {
                     dispatch(resetEmployeeFields());
                     Actions.employeeList({ type: 'reset' });
                   });
  };


export const updateEmployee = (employeeId, name, phone, shift) =>
  (dispatch, getState, { firebase }) => {
    dispatch(setEmployeeFormSubmitting(true));
    const { currentUser: { uid } } = firebase.auth();

    return firebase.database()
                   .ref(`/users/${uid}/employees/${employeeId}`)
                   .set({ name, phone, shift })
                   .then(() => {
                     dispatch(resetEmployeeFields());
                     Actions.employeeList({ type: 'reset' });
                   });
  };

export const deleteEmployee = (employeeId) =>
  (dispatch, getState, { firebase }) => {
    dispatch(setEmployeeFormSubmitting(true));
    const { currentUser: { uid } } = firebase.auth();

    return firebase.database()
                   .ref(`/users/${uid}/employees/${employeeId}`)
                   .remove()
                   .then(() => {
                     dispatch(resetEmployeeFields());
                     Actions.employeeList({ type: 'reset' });
                   });
  };

export const fetchEmployeeSuccess = createAction(
  'FETCH_EMPLOYEE_SUCCESS', data => data
);

export const setFetchingEmployees = createAction('FETCHING_EMPLOYEES');

export const getEmployees = () =>
  (dispatch, getState, { firebase }) => {
    dispatch(setFetchingEmployees());
    const { currentUser: { uid } } = firebase.auth();
    return firebase.database()
                   .ref(`/users/${uid}/employees`)
                   .on('value', snapshot => {
                     dispatch(fetchEmployeeSuccess(snapshot.val()));
                   });
  };
