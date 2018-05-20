import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Picker,
  Keyboard
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { connect } from 'react-redux';
import { validateEmail } from '../../util';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';
import { mudaEmail } from '../../actions/LoginActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.deepPurple300
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

class LoginEmailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarColor: colors.deepPurple400
    };

    //--
    const { navigate, goBack } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
  }

  navigateLoginSenha() {
    if (validateEmail(this.props.email)) {
      this.nav('LoginSenha');
    } else {
      Snackbar.show({
        title: 'Digite um e-mail válido',
        duration: Snackbar.LENGTH_SHORT,
        action: {
            title: 'OK',
            color: colors.primary,
            onPress: () => { /* Do something. */ },
        },
      });
    }
  }

  navigatePop() {
    // fecha teclado
    Keyboard.dismiss();

    if (this.props.ehInscricao) {
      this.setState({ statusBarColor: colors.green600 });
    } else {
      this.setState({ statusBarColor: colors.primaryDark });
    }
    this.navBack();
  }

  onChange = (v) => {
    this.props.mudaEmail(v);
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
            label={'Seu e-mail'}
            value={this.props.email}
            onChangeText={this.onChange}
          />
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => this.navigatePop()}
            style={{ backgroundColor: colors.deepPurple300, borderColor: '#fff', borderWidth: 1, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.white }]}>{'Voltar'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.navigateLoginSenha()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.deepPurple300 }]}>{'Próximo'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  email: state.LoginReducer.email,
  ehInscricao: state.LoginReducer.ehInscricao
});


export default connect(mapStateToProps, { mudaEmail })(LoginEmailScreen);