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
import { mudaCurso } from '../../actions/PerfilActions';
import { validateCurso } from '../../util';
import { TextField } from 'react-native-material-textfield';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.green400
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

class LoginCursoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarColor: colors.green600
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


  navigateLoginEmail() {
    // fecha teclado
    Keyboard.dismiss();
    if (validateCurso(this.props.curso)) {
      this.nav('LoginEmail');
    } else {
      Snackbar.show({
        title: 'Digite um curso válido',
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
    this.setState({ statusBarColor: colors.lightBlue600 });

    this.navBack();
  };

  onChange = (v) => {
    this.props.mudaCurso(v);
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
            label={'Seu curso'}
            value={this.props.curso}
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
            onPress={() => this.navigatePop()}
            style={{ backgroundColor: colors.green400, borderColor: '#fff', borderWidth: 1, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.white }]}>{'Voltar'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.navigateLoginEmail()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.green400 }]}>{'Próximo'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  curso: state.PerfilReducer.curso
});

export default connect(mapStateToProps, { mudaCurso })(LoginCursoScreen);