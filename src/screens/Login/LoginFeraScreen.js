import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Picker,
  CheckBox,
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../styles';
import { FloatingLabelInput } from '../../components';
import { mudaFera } from '../../actions/LoginActions';

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

    //--
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  navigateHome() {
    this.nav('Home');
  }

  onChangeCheckBox = () => {
    this.props.mudaFera(!this.props.fera);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.cyan600}
          barStyle={'light-content'}
        />
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column' }}>
          <Text style={styles.helpText}>{'Estamos quase lá '.concat(this.props.nome).concat(', só precisamos saber mais uma coisa ...')}</Text>
        
          <Text style={styles.text}>{'Você é fera?'}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              onChange={this.onChangeCheckBox}
              value={this.props.fera}
            />
            <Text style={styles.labelCheckBox}>{'Sim, e quero um prêmio por isso'}</Text>
          </View>
        </View>
        <View style={{ flex: 0.5, flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => this.navigateHome()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={[styles.buttonText, { color: colors.cyan500 }]}>{'Próximo'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fera: state.LoginReducer.fera,
  nome: state.LoginReducer.nome
});

export default connect(mapStateToProps, { mudaFera })(LoginFeraScreen);