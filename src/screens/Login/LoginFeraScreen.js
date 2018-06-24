import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Picker,
  CheckBox,
  BackHandler,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';
import { mudaFera, cadastraUsuario } from '../../actions/PerfilActions';
import { carregaNotificacoes } from '../../actions/NotificacaoActions';
import { carregaTickets } from '../../actions/TicketActions';
import { carregaProgramacao } from '../../actions/ProgramacaoActions';
import { carregaFaq } from '../../actions/FaqActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.cyan500
  },
  helpText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: colors.white,
  },
  labelCheckBox: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: colors.white,
  },
  text: {
    fontSize: 22,
    fontFamily: 'Lato-Regular',
    color: colors.white,
    marginTop: 26,
    marginBottom: 16,
  },
  buttonText: {
    color: colors.white,
    padding: 16,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Lato-Regular'
  }
});

class LoginFeraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarColor: colors.cyan600,
      load: false,
    };
    //--
    const { navigate, goBack } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
  }

  carregaDados = async() => {
    try {
      // carregamentos de dados do app vindo  do banco
      await this.props.carregaNotificacoes();
      await this.props.carregaTickets();
      await this.props.carregaProgramacao(); 
      await this.props.carregaFaq();
    } catch (e) {
      Alert.alert('Semana da Computação', 'Falha ao carregar os dados do aplicativo');
    }
  };

  async navigateToStatus() {
    this.setState({ load: true });
    try {
      await this.props.cadastraUsuario();
      await this.carregaDados();
      // --
      this.nav('StatusOk');
    } catch (e) {
      this.nav('StatusFail');
    }
  }

  navigatePop = () => {
    this.setState({ statusBarColor: colors.blueGray800 });

    this.navBack();
  };

  onChangeCheckBox = () => {
    this.props.mudaFera(!this.props.fera);
  };

  render() {
    const { load } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={this.state.statusBarColor}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={styles.helpText}>{'Estamos quase lá '.concat(this.props.nome).concat(', só precisamos saber mais uma coisa ...')}</Text>

          <Text style={styles.text}>{'Você é fera?'}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              onChange={this.onChangeCheckBox}
              value={this.props.fera}
            />
            <Text style={styles.labelCheckBox}>{'Sim e quero um prêmio por isso'}</Text>
          </View>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          { load ?
          <ActivityIndicator size={50} />
          :
          <View>
            <TouchableOpacity
              onPress={() => this.navigatePop()}
              style={{ backgroundColor: colors.cyan500, borderColor: '#fff', borderWidth: 1, borderRadius: 5 }}>
              <Text style={[styles.buttonText, { color: colors.white }]}>{'Voltar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigateToStatus()}
              style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
              <Text style={[styles.buttonText, { color: colors.cyan500 }]}>{'Finalizar'}</Text>
            </TouchableOpacity>
          </View>
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fera: state.PerfilReducer.fera,
  nome: state.PerfilReducer.nome
});

export default connect(mapStateToProps, { mudaFera, cadastraUsuario, carregaNotificacoes, carregaProgramacao, carregaFaq, carregaTickets  })(LoginFeraScreen);