import { gql } from 'react-apollo';

export const employee = gql`
  fragment EmployeeData on Employee {
    id
    phone
    name
  }
`;
