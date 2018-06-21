import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';
import { constants as c } from '../../util';

class CheckOkScreen extends React.Component {
  constructor(props) {
    super(props);
    //--
    const { navigate, goBack, dispatch } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
    this.dispatch = dispatch;
  }

  resetForward() {
    this.nav('Home');
  }

  render() {
    const { nome, evento, data, horario } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.orange300, padding: 16 }}>
        <StatusBar
          backgroundColor={colors.orange500}
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            name="check-circle"
            color={'#fff'}
            size={120}
          />
          <Text style={{ color: '#fff', padding: 16, fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center' }}>{'Ingresso válido!'}</Text>
          <View style={{ marginTop: 16, }}>
            <Text style={{ color: '#fff', fontSize: 22, fontFamily: 'Lato-Regular', textAlign: 'center' }}>{evento}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center', paddingTop: 16 }}>{data}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => this.resetForward()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={{ padding: 16, alignSelf: 'center', fontSize: 16, fontFamily: 'Lato-Regular', color: colors.orange300 }}>{'Confirmar presença'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  evento: state.TicketReducer.evento,
  nome: state.PerfilReducer.nome,
  data: state.TicketReducer.data,
  horario: state.TicketReducer.horario,
});

export default connect(mapStateToProps, {})(CheckOkScreen);