import React from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.primary,
  },
  buttonText: {
    color: colors.white, 
    padding: 16, 
    alignSelf: 'center', 
    fontSize: 16, 
    fontFamily: 'Roboto-Regular' 
  }
});

const imageTracos = require('../../../assets/img/tracos.png');
const imageSDC = require('../../../assets/img/logo-sem-fundo-branca.png');

class LoginSetupScreen extends React.Component {
  constructor(props) {
    super(props);
    //--
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  navigateLoginNome() {
    this.nav('LoginNome');
  }

  navigateLoginEmail() {
    this.nav('LoginEmail');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.primaryDark}
          barStyle={'light-content'}
        />
        <Image
          source={imageTracos}
          style={{ width: 90, height: 81 }}
        />
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={imageSDC}
          style={{ width: 110, height: 128 }}
        />
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end', padding: 16 }}>
            <TouchableOpacity
              onPress={ () => this.navigateLoginNome() }
              style={{ backgroundColor: colors.primary, borderColor: '#fff', borderWidth: 1,  borderRadius: 5 }}>
              <Text style={[styles.buttonText, { color: colors.white }]}>Cadastre-se</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={ () => this.navigateLoginEmail() }
              style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
              <Text style={[styles.buttonText, { color: colors.primary }]}>Entrar</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginSetupScreen;