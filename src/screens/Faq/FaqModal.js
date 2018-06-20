import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import UserAvatar from 'react-native-user-avatar';
import { colors } from '../../styles';


class FaqModal extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: 'Sobre Curso',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.cyan500,
      elevation: 5,
    },
  });

  render() {
    return (
      <ScrollView style={{ flexGrow: 1, padding: 8 }}>
        <StatusBar
          backgroundColor={colors.cyan600}
        />
        <View style={{ backgroundColor: '#fff', elevation: 5 }}>
          <View style={{ flexDirection: 'row', padding: 8 }}>
            <View style={{ flex: 0.8, flexDirection: 'column' }}>
              <Text style={{ fontFamily: 'Lato-Regular', color: colors.grey800, fontSize: 16 }}>{'Quantos períodos tem o curso de Ciência da Computação?'}</Text>
            </View>
            <View style={{ flex: 0.2, alignItems: 'flex-end', }}>
              <UserAvatar name="Avishay Bar" src={'https://pbs.twimg.com/profile_images/767903718461345792/GcizPkFq_400x400.jpg'} size={40} />
            </View>
          </View>
          <View style={{ borderTopColor: '#fafafa', borderBottomColor: '#fafafa', borderTopWidth: 1, borderBottomWidth: 1, backgroundColor: '#fafafa', padding: 8 }}>
            <Text style={{ fontFamily: 'Lato-Regular', color: colors.grey800, fontSize: 14 }}>{'O curso de Ciência da computação possui 8 períodos'}</Text>
          </View>
          <View style={{padding: 8}}>
          <Text style={{ fontFamily: 'Lato-Italic', color: colors.grey800, fontSize: 14 }}>{'Respondido por @alvesmarcos'}</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  abreviatura: state.NotificacaoReducer.abreviatura,
  autor: state.NotificacaoReducer.autor,
  barColor: state.NotificacaoReducer.barColor,
  corpo: state.NotificacaoReducer.corpo,
  darkBarColor: state.NotificacaoReducer.darkBarColor,
  data: state.NotificacaoReducer.data,
  titulo: state.NotificacaoReducer.titulo,
});

export default connect(mapStateToProps, {})(FaqModal);