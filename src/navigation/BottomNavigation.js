import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import {
  ProgramacaoStack,
  NotificacaoStack,
  FaqStack,
  TicketStack
} from './StacksNavigation';
import { colors } from '../styles';

const BottomNavigation = TabNavigator(
  {
    Programacao: { screen: ProgramacaoStack },
    Ticket: { screen: TicketStack },
    Faq: { screen: FaqStack },
    Notificacao: { screen: NotificacaoStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Programacao':
            iconName = 'calendar';
            break;
          case 'Ticket':
            iconName = 'tag';
            break;
          case 'Faq':
            iconName = 'message-circle';
            break;
          case 'Notificacao':
            iconName = 'bell';
            break;
        }
        return <Feather name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: 'gray',
      showLabel: false,
      style: {
        backgroundColor: colors.white,
        elevation: 5,
        borderTopColor: colors.white
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);

export default BottomNavigation;