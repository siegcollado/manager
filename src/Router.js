import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import {
  LoginForm,
  EmployeeList,
  EmployeeCreate,
  EmployeeEdit
} from './containers';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key='auth'>
      <Scene key='login' component={LoginForm} title='Please Login' />
    </Scene>
    <Scene key='main'>
      <Scene
        rightTitle="Add"
        onRight={() => Actions.employeeCreate()}
        key='employeeList'
        component={EmployeeList}
        title='Employees'
        type='reset'
        initial
      />
      <Scene
        key='employeeCreate'
        component={EmployeeCreate}
        title='Create Employee'
      />
      <Scene
        key='employeeEdit'
        component={EmployeeEdit}
        title='Edit Employee'
      />
    </Scene>
  </Router>
);

export default RouterComponent;
