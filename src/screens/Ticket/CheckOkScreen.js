import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Snackbar from 'react-native-snackbar';
import { connect } from 'react-redux';
import { carregaTickets, realizaCheckIn } from '../../actions/TicketActions';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';
import { constants as c } from '../../util';

class CheckOkScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      load: false,
    };
    //--
    const { navigate, goBack, dispatch } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
    this.dispatch = dispatch;
  }

  async resetForward() {
    this.setState({ load: true });
    try {
      await this.props.realizaCheckIn();
      await this.props.carregaTickets();
      // --
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
      });
      Snackbar.show({
        title: 'Bem vindo! Já registramos sua presença',
        duration: Snackbar.LENGTH_LONG,
        action: {
          title: 'OK',
          color: colors.green400,
          onPress: () => { /* Do something. */ },
        },
      });
      this.dispatch(resetAction);
    } catch (e) {
      Alert.alert('Semana da Computação', 'Ocorreu um erro inesperado ao confirmar a sua presença!');
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })]
      });
      this.dispatch(resetAction);
    }
  }

  render() {
    const { nome, evento, data, horario } = this.props;
    const { load } = this.state;
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
        { load ?
          <ActivityIndicator size={50} />
          :
          <TouchableOpacity
            onPress={() => this.resetForward()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={{ padding: 16, alignSelf: 'center', fontSize: 16, fontFamily: 'Lato-Regular', color: colors.orange300 }}>{'Confirmar presença'}</Text>
          </TouchableOpacity>
        }
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

export default connect(mapStateToProps, {carregaTickets, realizaCheckIn})(CheckOkScreen);