import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import * as actions from '../actions/employeeActions';
import {
  getEmployeeForm as getEmployeeSelector
} from '../reducers/employeeFormReducer';
import {
  updateEmployee as updateEmployeeMutation,
  deleteEmployee as deleteEmployeeMutation
} from '../graph/mutations/employee';
import { employees as query } from '../graph/queries/employee';
import EmployeeEdit from '../components/EmployeeEdit';

const withUpdateGraphQL = graphql(updateEmployeeMutation, {
  props: ({ ownProps, mutate }) => ({
    updateEmployee: () => {
      const {
        employee: {
          name, phone, shift
        },
        initialFields: {
          employee: { id }
        },
        navigateToMainMenu
      } = ownProps;

      return mutate({
        variables: { id, name, phone, shift },
        options: {
          refetchQueries: [{ query }]
        }
      }).then(() => { navigateToMainMenu(); });
    }
  })
})(EmployeeEdit);

const withDeleteGraphQL = graphql(deleteEmployeeMutation, {
  props: ({ ownProps, mutate }) => ({
    deleteEmployee: () => {
      const {
        initialFields: { id },
        navigateToMainMenu
      } = ownProps;

      return mutate({
        variables: { id },
        options: {
          refetchQueries: [{ query }]
        }
      }).then(() => { navigateToMainMenu(); });
    }
  })
})(withUpdateGraphQL);

const mapStateToProps = (state, props) => {
  const { id, name, shift, phone } = props;

  return {
    initialFields: { employee: { id, name, shift, phone } },
    employee: getEmployeeSelector(state)
  };
};

const mapDispatchToProps = {
  updateEmployeeField: actions.updateEmployeeField,
  navigateToMainMenu: actions.navigateToMainMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(withDeleteGraphQL);
