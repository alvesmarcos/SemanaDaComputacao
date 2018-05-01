import React from 'react';
import {
  Text,
  StatusBar,
  View,
} from 'react-native';
import { colors } from '../../styles';

class ProgramacaoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa'}}>
        <StatusBar
          backgroundColor={colors.grey400}
          barStyle={'light-content'}
        />

      </View>
    );
  }
}

export default ProgramacaoScreen;