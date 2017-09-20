import { handleActions } from 'redux-actions';
import { employeeUpdate } from '../actions/employeeActions';

export default handleActions({
  [employeeUpdate]: (state, { payload: { prop, value } }) => (
    { ...state, [prop]: value }
  )
}, {
  name: '',
  phoneNumber: '',
  shift: ''
});
