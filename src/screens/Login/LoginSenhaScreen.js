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
    //--
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  navigateLoginFera() {
    this.nav('LoginFera');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.orange500}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <FloatingLabelInput
            label={'Defina uma senha'}
            secureTextEntry={true}
          />
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => false}
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

export default LoginSenhaScreen;