import React from 'react';
import {
  View,
  StatusBar,
  Image,
  AsyncStorage,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { app as firebaseApp } from '../../config';
import { colors } from '../../styles'; 
import { constants as c } from '../../util';
import { mudaCamposPerfil } from '../../actions/PerfilActions'; 
import { carregaNotificacoes } from '../../actions/NotificacaoActions';
import { carregaTickets } from '../../actions/TicketActions';
import { carregaProgramacao } from '../../actions/ProgramacaoActions';
import { carregaFaq } from '../../actions/FaqActions';
import { carregaAvaliacoes } from '../../actions/RatingActions';
import { carregaDadosGerais } from '../../actions/GeneralActions';

const imageSDC = require('../../../assets/img/logo-sem-fundo-branca.png');

class Init extends React.Component {
  constructor(props) {
    super(props);
    
    this.cores = [
      { body: colors.orange300 , header: colors.orange500 },
      { body: colors.green400 , header: colors.green600 },
      { body: colors.cyan500 , header: colors.cyan600 },
    ];

    const { dispatch, navigate } = this.props.navigation;
    this.nav = navigate;
    this.dispatch = dispatch;
  }

  componentDidMount() {
    setTimeout(() => this.logado(), 2000);
  }

  async logado() {
    try {
      const value = await AsyncStorage.getItem(c.SUPER_STORE);
      let routeName = '';
      // --
      if (value !== null) {
        routeName = 'Home';
        this.props.mudaCamposPerfil(JSON.parse(value));
        // carregamentos de dados do app vindo  do banco
        await this.props.carregaNotificacoes();
        await this.props.carregaTickets();
        await this.props.carregaProgramacao();
        await this.props.carregaFaq();
        await this.props.carregaAvaliacoes();
        await this.props.carregaDadosGerais();
      } else {
        routeName = 'Login';
      }
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName })]
      });
      this.dispatch(resetAction);
    } catch (e) {
      Alert.alert('Semana da Computação', e.toString());
    }
  }

  _random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  render() {
    const cor = this._random(this.cores);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: cor.body }}>
        <StatusBar backgroundColor={cor.header} />
        <View style={{ backgroundColor: cor.header, width: 120, height: 120, borderRadius: 75, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={imageSDC}
            style={{ height: 80, width: 70 }}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, { carregaDadosGerais, carregaAvaliacoes, mudaCamposPerfil, carregaNotificacoes, carregaTickets, carregaProgramacao, carregaFaq })(Init);
