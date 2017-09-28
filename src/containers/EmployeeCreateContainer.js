import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import * as actions from '../actions/employeeActions';
import {
  getEmployeeForm as employeeSelector
} from '../reducers/employeeFormReducer';
import { addEmployee as mutation } from '../graph/mutations/employee';
import { employees as query } from '../graph/queries/employee';
import EmployeeCreate from '../components/EmployeeCreate';

const withGraphQL = graphql(mutation, {
  props: ({ ownProps: { employee, navigateToMainMenu }, mutate }) => ({
    createEmployee: () => {
      const { name, phone, shift } = employee;

      return mutate({
        variables: { name, phone, shift },
        options: {
          refetchQueries: [{ query }]
        }
      }).then(() => { navigateToMainMenu(); });
    }
  })
})(EmployeeCreate);

const mapStateToProps = (state) => ({
  employee: employeeSelector(state)
});

const mapDispatchToProps = {
  navigateToMainMenu: actions.navigateToMainMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(withGraphQL);
