import { handleActions } from 'redux-actions';
import {
  updateEmployeeField,
  setEmployeeFormSubmitting,
  resetEmployeeFields
} from '../actions/employeeActions';

const initialState = {
  name: '',
  phone: '',
  shift: null,
  submitting: false
};

export default handleActions({
  [updateEmployeeField]: (state, { payload: { prop, value } }) => (
    { ...state, [prop]: value }
  ),
  [setEmployeeFormSubmitting]: (state, { payload: { submitting } }) =>
    ({ ...state, submitting }),
  [resetEmployeeFields]: () => ({ ...initialState })
}, initialState);
