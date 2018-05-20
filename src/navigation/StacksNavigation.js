import React from 'react';
import {
  View
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { StackNavigator } from 'react-navigation';
import { colors } from '../styles';
import {
  ProgramacaoScreen,
  NotificacaoScreen,
  FaqScreen,
  TicketScreen,
  LoginSetupScreen,
  LoginEmailScreen,
  LoginSenhaScreen,
  LoginFeraScreen,
  LoginCursoScreen,
  LoginNomeScreen,
} from '../screens';
import { transitionConfig } from '../util';
import { HeaderRight } from '../components';


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

const TicketStack = StackNavigator(
  {
    Ticket: { screen: TicketScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Ingressos',
      headerTitleStyle: {
        fontFamily: 'Lato-Regular',
        fontWeight: 'normal',
      },
      headerTintColor: '#424242',
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 5,
      },
    }),
  }
);

const FaqStack = StackNavigator(
  {
    Faq: { screen: FaqScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Perguntas frequentes',
      headerTitleStyle: {
        fontFamily: 'Lato-Regular',
        fontWeight: 'normal',
      },
      headerTintColor: '#424242',
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 5,
      },
      headerRight: (
        <View style={{ flexDirection: 'row' }}>
        <MaterialIcons.Button size={22} name="view-list" color={colors.grey800} backgroundColor={colors.white}
      onPress={() => navigation.goBack(null)} />
       <MaterialIcons.Button size={22} name="edit" color={colors.grey800} backgroundColor={colors.white}
       onPress={() => navigation.goBack(null)} />
       </View>
      ),
    }),
  }
);

const NotificacaoStack = StackNavigator(
  {
    Notificacao: { screen: NotificacaoScreen }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: 'Notificações',
      headerTitleStyle: {
        fontFamily: 'Lato-Regular',
        fontWeight: 'normal',
      },
      headerTintColor: '#424242',
      headerStyle: {
        backgroundColor: colors.white,
        elevation: 5,
      },
    }),
  }
);


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
  FaqStack,
  TicketStack,
  LoginStack
};
