import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import {
  ProgramacaoStack,
  CheckinStack,
  AmigosStack,
  UsuarioStack
} from './StacksNavigation';
import { colors } from '../styles';

const BottomNavigation = TabNavigator(
  {
    Programacao: { screen: ProgramacaoStack },
    Checkin: { screen: CheckinStack },
    Amigos: { screen: AmigosStack },
    Usuario: { screen: UsuarioStack },
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
          case 'Checkin':
            iconName = 'user';
            break;
          case 'Amigos':
            iconName = 'heart';
            break;
          case 'Usuario':
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
        backgroundColor: colors.grey100,
        elevation: 5,
        borderTopColor: colors.grey100
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);

export default BottomNavigation;