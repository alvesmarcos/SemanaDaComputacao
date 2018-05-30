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
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { connect } from 'react-redux';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';
import { mudaSenha } from '../../actions/PerfilActions';
import { validateSenha } from '../../util';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.orange300
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
      statusBarColor: colors.orange500
    };

    //--
    const { navigate, goBack } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
  }

  componentDidMount() {
    BackHandler.addEventListener('back_press', this.navigatePop);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('back_press', this.navigatePop);
  }

  navigateLoginFera() {
    if (validateSenha(this.props.senha)) {
      Keyboard.dismiss();
      if (this.props.ehInscricao) {
        this.nav('LoginFera');
      } else {
        this.nav('Home');
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

  navigatePop = () => {
    // fecha teclado
    Keyboard.dismiss();
    this.setState({ statusBarColor: colors.deepPurple400 });
    this.navBack();
    //--
    return true;
  };


  onChange = (v) => {
    this.props.mudaSenha(v);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={this.state.statusBarColor}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <FloatingLabelInput
            label={this.props.ehInscricao ? 'Defina uma senha': 'Sua senha'}
            helpText={this.props.ehInscricao ? 'A senha deve conter no mínimo 8 dígitos' : ''}
            value={this.props.senha}
            onChangeText={this.onChange}
            keyboardType={'numeric'}
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => this.navigatePop()}
            style={{ backgroundColor: colors.orange300, borderColor: '#fff', borderWidth: 1, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.white }]}>{'Voltar'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.navigateLoginFera()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.orange300 }]}>{'Próximo'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  senha: state.PerfilReducer.senha,
  ehInscricao: state.PerfilReducer.ehInscricao
});

export default connect(mapStateToProps, { mudaSenha })(LoginSenhaScreen);