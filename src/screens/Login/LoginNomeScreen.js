import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';

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
    //--
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  navigateLoginCurso() {
    this.nav('LoginCurso');
  }

  navigatePop() {
    // TODO fazer o pop da scene
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={colors.lightBlue600}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <FloatingLabelInput
            label={'Nome completo'}
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

export default LoginNomeScreen;