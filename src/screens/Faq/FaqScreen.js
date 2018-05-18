import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';

class FaqScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: colors.windowBackground, padding: 2 }}>
        <View style={{ flex: 0.5, flexDirection: 'row'}}>
          <View style={{ flex: 0.5, backgroundColor: colors.cyan500, marginRight: 1, flexDirection: 'column'}}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Feather
                name={'clipboard'}
                size={60}
                color={colors.white}
              />
            </View>
            <View style={{ alignItems: 'center', backgroundColor: colors.cyan600, padding: 10 }}>
              <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 18}}>{'Curso'}</Text>
            </View>
          </View>
          <View style={{ flex: 0.5, backgroundColor: colors.primary, marginLeft: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Feather
                name={'heart'}
                size={60}
                color={colors.white}
              />
            </View>
            <View style={{ alignItems: 'center', backgroundColor: colors.primaryDark, padding: 10 }}>
              <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 18}}>{'Auxílios'}</Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'row', marginTop: 1 }}>
          <View style={{ flex: 0.5, backgroundColor: colors.deepPurple300, marginRight: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Feather
                  name={'map'}
                  size={60}
                  color={colors.white}
                />
              </View>
              <View style={{ alignItems: 'center', backgroundColor: colors.deepPurple400, padding: 10 }}>
                <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 18}}>{'Intercâmbio'}</Text>
              </View>
          </View>
          <View style={{ flex: 0.5, backgroundColor: colors.orange300, marginLeft: 1 }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Feather
                  name={'file'}
                  size={60}
                  color={colors.white}
                />
              </View>
              <View style={{ alignItems: 'center', backgroundColor: colors.orange500, padding: 10 }}>
                <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 18}}>{'Monitoria'}</Text>
              </View>
          </View>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'row', marginTop: 1 }}>
          <View style={{ flex: 0.5, backgroundColor: colors.green400, marginRight: 1 }}>
            
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Feather
                  name={'shield'}
                  size={60}
                  color={colors.white}
                />
              </View>
              <View style={{ alignItems: 'center', backgroundColor: colors.green600, padding: 10 }}>
                <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 18}}>{'Coordenação'}</Text>
              </View>
          

          </View>
          <View style={{ flex: 0.5, backgroundColor: colors.lightBlue400, marginLeft: 1 }}>

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Feather
                  name={'repeat'}
                  size={60}
                  color={colors.white}
                />
              </View>
              <View style={{ alignItems: 'center', backgroundColor: colors.lightBlue600, padding: 10 }}>
                <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 18}}>{'Geral'}</Text>
              </View>

          </View>
        </View>
      </View>
    );
  }
}
// const FaqScreen = TabNavigator(
//   {
//     Categorias: { screen: CategoriasScreen },
//     MinhasPerguntas: { screen: MinhasPerguntasScreen },
//     EmAlta: { screen: MinhasPerguntasScreen },
  
//   },
//   {
//     navigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;

//         switch (routeName) {
//           case 'Categorias':
//             iconName = 'sliders';
//             break;
//           case 'MinhasPerguntas':
//             iconName = 'align-justify';
//             break;
//           case 'EmAlta':
//             iconName = 'star';
//             break;
//         }
//         return <Feather name={iconName} size={20} color={tintColor} />;
//       },
//     }),
//     tabBarPosition: 'top',
//     tabBarOptions: {
//       activeTintColor: colors.grey900,
//       inactiveTintColor: 'gray',
//       showLabel: false,
//       showIcon: true,
//       style: {
//         backgroundColor: colors.white,
//         elevation: 5,
//         borderTopColor: colors.white
//       },
//       indicatorStyle: {
//         backgroundColor: colors.grey900
//       }
//     },
//     tabBarComponent: TabBarTop,
//     animationEnabled: true,
//     swipeEnabled: false,
//   }
// );

export default FaqScreen;