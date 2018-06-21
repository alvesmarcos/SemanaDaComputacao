import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Picker,
  Keyboard,
  BackHandler,
  ActivityIndicator,
  Alert,
  AsyncStorage,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';
import { mudaSenha, doLogin } from '../../actions/PerfilActions';
import { validateSenha } from '../../util';
import { constants as c } from '../../util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.blueGray600
  },
  helpText: {
    fontSize: 14,
    color: '#eee'
  },
  buttonText: {
    color: colors.white,
    padding: 16,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Lato-Regular'
  }
});

class LoginSenhaScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarColor: colors.blueGray800,
      load: false,
    };

    //--
    const { navigate, goBack, dispatch } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
    this.dispatch = dispatch;
  }

  // componentDidMount() {
  //   BackHandler.addEventListener('back_press', this.navigatePop);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('back_press', this.navigatePop);
  // }

  async navigateLoginFera() {
    if (validateSenha(this.props.senha)) {
      Keyboard.dismiss();
      if (this.props.ehInscricao) {
        this.nav('LoginFera');
      } else {
        this.setState({ load: true });
        // -- logar no app
        this.doLogin();
      }
    } else {
      Snackbar.show({
        title: 'Digite um senha válida',
        duration: Snackbar.LENGTH_SHORT,
        action: {
          title: 'OK',
          color: colors.primary,
          onPress: () => { /* Do something. */ },
        },
      });
    }
  }

  async doLogin() {
    try {
      // -- logar no app
      await this.props.doLogin();
      await this.storeUsuario();
      this.resetForward();
    } catch (e) {
      Snackbar.show({
        title: 'Usuário ou senha inválidos',
        duration: Snackbar.LENGTH_LONG,
        action: {
          title: 'OK',
          color: colors.primary,
          onPress: () => { /* Do something. */ },
        },
      });
      this.setState({ load: false });
    }
  }

  resetForward() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Home' })]
    });
    this.dispatch(resetAction);
  }


  async storeUsuario() {
    const { id, nome, curso, email, fera } = this.props;
    try {
      await AsyncStorage.setItem(c.SUPER_STORE, JSON.stringify({ id, nome, curso, email, fera }));
    } catch (e) {
      Alert.alert('Semana da Computação', 'Memória insuficiente, tente mais tarde!');
    }
  }

  navigatePop = () => {
    // fecha teclado
    Keyboard.dismiss();
    this.setState({ statusBarColor: colors.deepPurple400 });
    this.navBack();
    //--
    return true;
  }


  onChange = (v) => {
    this.props.mudaSenha(v);
  };

  render() {
    const { load } = this.state;
    const { ehInscricao } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={this.state.statusBarColor}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <FloatingLabelInput
            label={this.props.ehInscricao ? 'Defina uma senha' : 'Sua senha'}
            helpText={this.props.ehInscricao ? 'A senha deve conter no mínimo 8 dígitos' : ''}
            value={this.props.senha}
            onChangeText={this.onChange}
            keyboardType={'numeric'}
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          {load ?
            <ActivityIndicator size={50} />
            :
            <View>
              <TouchableOpacity
                onPress={this.navigatePop}
                style={{ backgroundColor: colors.blueGray600, borderColor: '#fff', borderWidth: 1, borderRadius: 5 }}>
                <Text style={[styles.buttonText, { color: colors.white }]}>{'Voltar'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.navigateLoginFera()}
                style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
                <Text style={[styles.buttonText, { color: colors.blueGray600 }]}>{ehInscricao ? 'Próximo' : 'Entrar'}</Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  id: state.PerfilReducer.id,
  nome: state.PerfilReducer.nome,
  curso: state.PerfilReducer.curso,
  email: state.PerfilReducer.email,
  fera: state.PerfilReducer.fera,
  senha: state.PerfilReducer.senha,
  ehInscricao: state.PerfilReducer.ehInscricao
});

export default connect(mapStateToProps, { mudaSenha, doLogin })(LoginSenhaScreen);