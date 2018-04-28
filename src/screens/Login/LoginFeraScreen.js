import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Picker,
  Keyboard,
  CheckBox,
} from 'react-native';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.cyan500
  },
  helpText: {
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: colors.white,
  },
  labelCheckBox: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: colors.white,
  },
  text: {
    fontSize: 22,
    fontFamily: 'Lato-Regular',
    color: colors.white,
    marginTop: 26,
    marginBottom: 16,
  },
  buttonText: {
    color: colors.white,
    padding: 16,
    alignSelf: 'center',
    fontSize: 16,
    fontFamily: 'Lato-Regular'
  }
});

class LoginFeraScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: true
    };
    //--
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  componentWillMount() {
    Keyboard.dismiss();
  }

  onChangeCheckBox = () => {
    this.setState({ value: !this.state.value });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.cyan600}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={styles.helpText}>{'Estamos quase lá, só precisamos saber mais uma coisa ...'}</Text>
        
          <Text style={styles.text}>{'Você é fera?'}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              onChange={this.onChangeCheckBox}
              value={this.state.value}
            />
            <Text style={styles.labelCheckBox}>{'Sim, e quero um prêmio por isso'}</Text>
          </View>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => false}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.cyan500 }]}>{'Próximo'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginFeraScreen;