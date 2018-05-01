import React from 'react';
import { StackNavigator } from 'react-navigation';
import { colors } from '../styles';

import {
  ProgramacaoScreen,
  CheckinScreen,
  AmigosScreen,
  UsuarioScreen,
  LoginSetupScreen,
  LoginEmailScreen,
  LoginSenhaScreen,
  LoginFeraScreen,
  LoginCursoScreen,
  LoginNomeScreen,
} from '../screens';
import { transitionConfig } from '../util';



const ProgramacaoStack = StackNavigator(
  {
    Programacao: { screen: ProgramacaoScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Programação',
      headerTitleStyle: {
        fontFamily: 'Liato-Regular',
        fontWeight: 'normal',
      },
      headerTintColor: '#424242',
      headerStyle: {
        backgroundColor: colors.grey100,
        elevation: 2
      }
    }),
  }
);

const CheckinStack = StackNavigator({
  Checkin: { screen: CheckinScreen }
});

const AmigosStack = StackNavigator({
  Amigos: { screen: AmigosScreen }
});

const UsuarioStack = StackNavigator({
  Usuario: { screen: UsuarioScreen }
});

const LoginStack = StackNavigator(
  {
    LoginSetup: { screen: LoginSetupScreen },
    LoginEmail: { screen: LoginEmailScreen },
    LoginSenha: { screen: LoginSenhaScreen },
    LoginFera: { screen: LoginFeraScreen },
    LoginCurso: { screen: LoginCursoScreen },
    LoginNome: { screen: LoginNomeScreen }
  },
  {
    navigationOptions: { header: null },
    transitionConfig
});

export {
  ProgramacaoStack,
  CheckinStack,
  AmigosStack,
  UsuarioStack,
  LoginStack
};
