import React from 'react';
import { StackNavigator } from 'react-navigation';
import { LoginStack } from './StacksNavigation';
import BottomNavigation from './BottomNavigation';
import { Init, StatusOkScreen, StatusFailScreen, MensagemScreen } from '../screens';

const Routes = StackNavigator(
  { 
    Init: { screen: Init },
    Login: { screen: LoginStack },
    Home: { screen: BottomNavigation },
    StatusOk: { screen: StatusOkScreen },
    StatusFail: { screen: StatusFailScreen },
    MensagemScreen: { screen: MensagemScreen },
  }, {
    initialRouteName: 'MensagemScreen',
    // headerMode: 'screen',
    // navigationOptions: { header: null },
  }
);

export default Routes;