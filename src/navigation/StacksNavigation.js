import React from 'react';
import { StackNavigator } from 'react-navigation';

import {
  ProgramacaoScreen,
  CheckinScreen,
  TrendingScreen,
  UsuarioScreen,
  LoginSetupScreen,
} from '../screens';

const ProgramacaoStack = StackNavigator({
  Programacao: { screen: ProgramacaoScreen }
});

const CheckinStack = StackNavigator({
  Checkin: { screen: CheckinScreen }
});

const TrendingStack = StackNavigator({
  Trending: { screen: TrendingScreen }
});

const UsuarioStack = StackNavigator({
  Usuario: { screen: UsuarioScreen }
});

const LoginStack = StackNavigator(
  {
    LoginSetup: { screen: LoginSetupScreen },
  },
  {
    navigationOptions: { header: null }
});

export {
  ProgramacaoStack,
  CheckinStack,
  TrendingStack,
  UsuarioStack,
  LoginStack
};
