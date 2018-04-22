import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

class LoginFeraScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LoginFera</Text>
      </View>
    );
  }
}

export default LoginFeraScreen;