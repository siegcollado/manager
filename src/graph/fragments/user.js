import { gql } from 'react-apollo';

import { employee as employeeFragment } from './employee';

export const user = gql`
  fragment UserData on User {
    id
    email
    created_at
    employees {
      ...EmployeeData
    }
  }
  ${employeeFragment}
`;
