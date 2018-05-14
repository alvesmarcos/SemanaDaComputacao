import React from 'react';
import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import Feather from 'react-native-vector-icons/Feather';
import { CategoriasScreen, MinhasPerguntasScreen } from './Tab';
import { colors } from '../../styles';

const FaqScreen = TabNavigator(
  {
    Categorias: { screen: CategoriasScreen },
    MinhasPerguntas: { screen: MinhasPerguntasScreen },
    EmAlta: { screen: MinhasPerguntasScreen },
  
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch (routeName) {
          case 'Categorias':
            iconName = 'sliders';
            break;
          case 'MinhasPerguntas':
            iconName = 'align-justify';
            break;
          case 'EmAlta':
            iconName = 'star';
            break;
        }
        return <Feather name={iconName} size={20} color={tintColor} />;
      },
    }),
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: colors.grey900,
      inactiveTintColor: 'gray',
      showLabel: false,
      showIcon: true,
      style: {
        backgroundColor: colors.white,
        elevation: 5,
        borderTopColor: colors.white
      },
      indicatorStyle: {
        backgroundColor: colors.grey900
      }
    },
    tabBarComponent: TabBarTop,
    animationEnabled: true,
    swipeEnabled: false,
  }
);

export default FaqScreen;