import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purple600
  }
});

class LoginEmailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor={colors.purple800}
          barStyle={'light-content'}
        />
        <Text>LoginEmail</Text>
      </View>
    );
  }
}

export default LoginEmailScreen;