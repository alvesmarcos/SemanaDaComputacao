import { TabNavigator, TabBarBottom } from 'react-navigation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomNavigation = TabNavigator(
  {
    Programacao: { screen: ProgramacaoScreen },
    Checkin: { screen: CheckinScreen },
    Trending: { screen: TrendingScreen },
    Usuario: { screen: UsuarioScreen },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;

        switch(routeName) {
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
            iconName = 'user';
            break;
        }
        return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);

export default BottomNavigation;