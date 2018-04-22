import React from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  ProgramacaoStack,
  CheckinStack,
  TrendingStack,
  UsuarioStack
} from './StacksNavigation';

const BottomNavigation = TabNavigator(
  {
    Programacao: { screen: ProgramacaoStack },
    Checkin: { screen: CheckinStack },
    Trending: { screen: TrendingStack },
    Usuario: { screen: UsuarioStack },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Programacao':
            iconName = 'calendar-text';
            break;
          case 'Checkin':
            iconName = 'qrcode';
            break;
          case 'Trending':
            iconName = 'fire';
            break;
          case 'Usuario':
            iconName = 'account';
            break;
        }
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);

export default BottomNavigation;