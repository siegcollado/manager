import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Spinner } from './common';
import ListItem from './ListItem';

export default class EmployeeList extends Component {
  componentWillMount() {
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ data }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    if (data.user && data.user.employees) {
      this.dataSource = ds.cloneWithRows(data.user.employees);
    }
  }

  renderRow(employee) {
    return <ListItem {...employee} />;
  }

  render() {
    const { data: { loading } } = this.props;

    if (loading) {
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
