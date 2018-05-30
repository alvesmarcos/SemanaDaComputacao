import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginStack } from './StacksNavigation';
import BottomNavigation from './BottomNavigation';
import { StatusOkScreen } from '../screens';

const Routes = StackNavigator(
  {
    Login: { screen: LoginStack },
    Home: { screen: BottomNavigation },
    StatusOk: { screen: StatusOkScreen },
  }, {
    initialRouteName: 'StatusOk',
    navigationOptions: { header: null },
  }
);

export default Routes;