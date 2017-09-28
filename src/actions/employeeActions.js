import { createAction } from 'redux-actions';
import { Actions } from 'react-native-router-flux';

export const updateEmployeeField =
  createAction(
    'EMPLOYEE_UPDATE_FIELD',
    (prop, value) => ({ prop, value })
  );

export const resetEmployeeFields =
  createAction('RESET_EMPLOYEE_FIELDS');

export const navigateToMainMenu = () =>
  (dispatch) => {
    dispatch(resetEmployeeFields());
    Actions.employeeList();
  };
