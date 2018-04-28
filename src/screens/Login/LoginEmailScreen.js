import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Picker
} from 'react-native';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';

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
    //--
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  navigateLoginSenha() {
    this.nav('LoginSenha');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.deepPurple400}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <FloatingLabelInput
            label={'Seu e-mail'}
          />
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => false}
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

export default LoginEmailScreen;