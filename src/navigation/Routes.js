import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginStack } from './StacksNavigation';
import BottomNavigation from './BottomNavigation';
import { Init, StatusOkScreen, StatusFailScreen } from '../screens';

const Routes = StackNavigator(
  { 
    Init: { screen: Init },
    Login: { screen: LoginStack },
    Home: { screen: BottomNavigation },
    StatusOk: { screen: StatusOkScreen },
    StatusFail: { screen: StatusFailScreen },
  }, {
    initialRouteName: 'Init',
    navigationOptions: { header: null },
  }
);

export default Routes;