import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue700
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
    this.nav('LoginEmail');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={colors.lightBlue900}
          barStyle={'light-content'}
        />
        <Text>LoginNome</Text>
      </View>
    );
  }
}

export default LoginNomeScreen;