import { graphql } from 'react-apollo';
import { employees as query } from '../graph/queries/employee';
import EmployeeList from '../components/EmployeeList';

export default graphql(query)(EmployeeList);
