import { combineReducers } from 'redux';
import auth from './authReducer';
import employeeForm from './employeeFormReducer';

export default combineReducers({
  auth,
  employeeForm
});
