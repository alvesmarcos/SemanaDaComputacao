import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Keyboard,
  BackHandler,
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { connect } from 'react-redux';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';
import { mudaNome } from '../../actions/PerfilActions';
import { validateNome } from '../../util';
import { TextField } from 'react-native-material-textfield';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.lightBlue400
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

class LoginNomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarColor: colors.lightBlue600
    };

    //--
    const { navigate, goBack } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
  }

  // componentDidMount() {
  //   BackHandler.addEventListener('back_press', this.navigatePop);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('back_press', this.navigatePop);
  // }

  navigateLoginCurso() {
    // fecha teclado
    Keyboard.dismiss();
    if (validateNome(this.props.nome)) {
      this.nav('LoginCurso');
    } else {
      Snackbar.show({
        title: 'Digite um nome válido',
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
    this.setState({ statusBarColor: colors.primaryDark });

    this.navBack();
    return true;
  };

  onChange = (v) => {
    this.props.mudaNome(v);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={this.state.statusBarColor}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <TextField
            label={'Seu nome'}
            value={this.props.nome}
            onChangeText={this.onChange}
            fontSize={22}
            tintColor={colors.white}
            baseColor={colors.white}
            labelTextStyle={{ fontFamily: 'Lato-Regular', color: '#fff'}}
            textColor={colors.white}
          />
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
            <TouchableOpacity
              onPress={ () => this.navigatePop() }
              style={{ backgroundColor: colors.lightBlue400, borderColor: '#fff', borderWidth: 1,  borderRadius: 5 }}>
              <Text style={[styles.buttonText, { color: colors.white }]}>{'Voltar'}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={ () => this.navigateLoginCurso() }
              style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
              <Text style={[styles.buttonText, { color: colors.lightBlue400 }]}>{'Próximo'}</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.PerfilReducer.nome
});

export default connect(mapStateToProps, { mudaNome })(LoginNomeScreen);