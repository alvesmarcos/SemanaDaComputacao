import React from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';

class ProgramacaoCheckModal extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: '',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.orange300,
      elevation: 0,
    },
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
        <StatusBar backgroundColor={colors.orange500} />
        <View style={{ backgroundColor: colors.orange300, height: 80, flexDirection: 'row', justifyContent: 'center', elevation: 5 }}>
          <Feather
            name={'clock'}
            size={50}
            color={colors.white}
          />
          <View style={{ marginLeft: 20  }}>
            <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 14, marginBottom: 4 }}>{'Horário de início desta atividade'}</Text>
            <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 26, textAlign: 'center' }}>{'07h30min'}</Text>
          </View>
        </View>
        <ScrollView>
        <View style={{ flexDirection: 'column', elevation: 5, padding: 16, backgroundColor: '#fff', margin: 8, }}>
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'menu'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Nome'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{'Check-in'}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />
          
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'home'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Local'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{'Hall de Entrada - Centro de Informática'}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />
          
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'layers'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Categoria'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{'Check-in & Inscrições'}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />
          
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'clock'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Término'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{'17h45min'}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />

          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'alert-circle'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Descrição'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{'Para fazer o credenciamente tenha o ingresso em mãos de forma digital ou impressa, caso você deseje evitar filas tenha o aplicativo instalado e procure um ponto para validar seu ingresso eletrônico'}</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProgramacaoCheckModal;