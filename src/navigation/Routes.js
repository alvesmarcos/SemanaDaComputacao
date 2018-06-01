import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginStack } from './StacksNavigation';
import BottomNavigation from './BottomNavigation';
import { Init, StatusOkScreen, StatusFailScreen, NotificacaoModal } from '../screens';

const Routes = StackNavigator(
  {
    Init: { 
      screen: Init, 
      navigationOptions: { header: null } 
    },
    Login: { 
      screen: LoginStack,
      navigationOptions: { header: null } 
    },
    Home: { 
      screen: BottomNavigation,
      navigationOptions: { header: null },
    },
    StatusOk: {
      screen: StatusOkScreen,
      navigationOptions: { header: null } 
    },
    StatusFail: {
      screen: StatusFailScreen,
      navigationOptions: { header: null } 
    },
    NotificacaoModal: { screen: NotificacaoModal },
  }, {
    initialRouteName: 'Init',
    // headerMode: 'screen',
  }
);

export default Routes;