import { createAction } from 'redux-actions';

export const employeeUpdate =
  createAction('EMPLOYEE_UPDATE_FIELD', (prop, value) => ({ prop, value }));
