import React from 'react';
import {
  View,
  StatusBar,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';

class ProgramacaoCheckModal extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: '',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.orange300,
      elevation: 0,
    },
  });

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
        <StatusBar backgroundColor={colors.orange500} />
        <View style={{ backgroundColor: colors.orange300, height: 80, flexDirection: 'row', justifyContent: 'center', elevation: 5 }}>
          <Feather
            name={'clock'}
            size={50}
            color={colors.white}
          />
          <View style={{ marginLeft: 26  }}>
            <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 16, marginBottom: 4 }}>{'Horário de início desta atividade'}</Text>
            <Text style={{ color: colors.white, fontFamily: 'Lato-Regular', fontSize: 26, textAlign: 'center' }}>{'07h30min'}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ProgramacaoCheckModal;