import { gql } from 'react-apollo';
import { employee as employeeFragment } from '../fragments/employee';

export const addEmployee = gql`
  mutation addEmployee($name: String!, $phone: String!){
    addEmployee(input: { name: $name, phone: $phone }) {
      ...EmployeeData
    }
  }
  ${employeeFragment}
`;

export const updateEmployee = gql`
  mutation updateEmployee($id: ID!, $name: String!, $phone: String!) {
    updateEmployee(input: { id: $id, name: $name, phone: $phone }) {
      ...EmployeeData
    }
  }
  ${employeeFragment}
`;

export const deleteEmployee = gql`
  mutation deleteEmployee($id: ID!) {
    deleteEmployee(input: { id: $id }) {
      id
    }
  }
`;
