import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '../../styles';

class StatusFailScreen extends React.Component {
  render() {
    const { nome } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#C2185B', padding: 16 }}>
        <StatusBar
          backgroundColor={'#AD1457'}
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            name="emoji-sad"
            color={'#fff'}
            size={120}
          />
          <Text style={{ color: '#fff', padding: 16, fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center' }}>{'Ocorreu um erro ao criar sua conta!'}</Text>
          <View style={{ marginTop: 16, }}>
            <Text style={{ color: '#fff', fontSize: 22, fontFamily: 'Lato-Regular',textAlign: 'center' }}>{nome}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center', paddingTop: 16 }}>{'Verifique se você possui conexão com internet ou se seu e-mail está correto.'}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => false}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={{ padding: 16, alignSelf: 'center', fontSize: 16, fontFamily: 'Lato-Regular', color: '#C2185B' }}>{'Tentar Novamente'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.PerfilReducer.nome,
});

export default connect(mapStateToProps, { })(StatusFailScreen);