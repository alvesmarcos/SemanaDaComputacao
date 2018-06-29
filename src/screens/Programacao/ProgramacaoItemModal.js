import React from 'react';
import {
  View,
  StatusBar,
  Text,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';

class ProgramacaoItemModal extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: '',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: navigation.state.params.barColor,
      elevation: 0,
    },
  });

  constructor(props) {
    super(props);
  }

  render() {
    const { darkBarColor, barColor, iconNome, texto, item } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
        <StatusBar backgroundColor={darkBarColor} />
        <View style={{ backgroundColor: barColor, height: 80, flexDirection: 'row', justifyContent: 'center', elevation: 5 }}>
          <Feather
            name={iconNome}
            size={45}
            color={colors.white}
          />
          <View style={{ marginLeft: 16  }}>
            <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 14, marginBottom: 4, textAlign: 'center' }}>{'Categoria da Atividade'}</Text>
            <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 24, textAlign: 'center' }}>{texto}</Text>
          </View>
        </View>
        <ScrollView>
        <View style={{ flexDirection: 'column', elevation: 5, padding: 16, backgroundColor: '#fff', margin: 8, }}>
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'info'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Nome'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{item.nome}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />
          
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'map-pin'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Local'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{item.local}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />
          
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'clock'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Horário'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{item.horaInicio.concat(' - ').concat(item.horaFim)}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />
  
          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'calendar'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Data'}</Text>
          </View>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{item.data}</Text>
          <View style={{ borderTopWidth: 1, borderTopColor: '#eee', marginVertical: 16 }} />

          <View style={{ flexDirection: 'row' }}>
            <Feather
              name={'menu'}
              size={20}
              color={'gray'}
            />
            <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16, marginLeft: 12 }}>{'Descrição'}</Text>
          </View>
          { item.descricao !== '-' ?
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{item.descricao}</Text>
            :
            <Text style={{ fontFamily: 'Lato-Italic', fontSize: 16, marginLeft: 32, marginTop: 4 }}>{'Descrição não informada pelo autor'}</Text>
          }
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default ProgramacaoItemModal;
//'Para fazer o credenciamente tenha o ingresso em mãos de forma digital ou impressa, caso você deseje evitar filas tenha o aplicativo instalado e procure um ponto para validar seu ingresso eletrônico'