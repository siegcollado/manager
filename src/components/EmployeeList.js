import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ListView } from 'react-native';
import { getEmployees } from '../actions';
import * as selectors from '../selectors';
import { Spinner } from './common';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.getEmployees();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return <ListItem {...employee} />;
  }

  render() {
    const { fetching } = this.props;

    if (fetching) {
      return <Spinner size="large" />;
    }

    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

export default connect(
  (state) => ({
    employees: selectors.employeeList(state),
    fetching: selectors.fetching(state)
  }),
  dispatch => bindActionCreators({ getEmployees }, dispatch)
)(EmployeeList);
