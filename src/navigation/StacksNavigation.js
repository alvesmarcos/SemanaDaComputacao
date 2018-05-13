import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import { StackNavigator } from 'react-navigation';
import { colors } from '../styles';
import {
  ProgramacaoScreen,
  NotificacaoScreen,
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
        fontFamily: 'Lato-Regular',
        fontWeight: 'normal',
      },
      headerTintColor: '#424242',
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 0,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey100
      },
    }),
  }
);

const UsuarioStack = StackNavigator({
  Usuario: { screen: UsuarioScreen }
});

const AmigosStack = StackNavigator({
  Amigos: { screen: AmigosScreen }
});

const NotificacaoStack = StackNavigator({
  Checkin: { screen: NotificacaoScreen }
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
  NotificacaoStack,
  AmigosStack,
  UsuarioStack,
  LoginStack
};
