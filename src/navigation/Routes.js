import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginStack } from './StacksNavigation';
import BottomNavigation from './BottomNavigation';

const Routes = StackNavigator(
  {
    Login: { screen: LoginStack },
    Home: { screen: BottomNavigation },
  }, {
    initialRouteName: 'Login'
  }
);

export default Routes;