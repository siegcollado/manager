import { handleActions } from 'redux-actions';
import { fetchEmployeeSuccess, setFetchingEmployees } from '../actions';

const initialState = {
  data: {},
  fetching: false
};

export default handleActions({
  [fetchEmployeeSuccess]: (state, { payload }) => (
    { data: payload, fetching: false }
  ),
  [setFetchingEmployees]: (state) => ({ ...state, fetching: true })
}, initialState);
