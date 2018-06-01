import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { colors } from '../../styles';

class MensagemScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Mensagem para você',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: colors.orange300,
      elevation: 5,
    },
  }

  render() {
    return (
      <ScrollView style={{ flexGrow: 1, backgroundColor: colors.white }}>
        <StatusBar
          backgroundColor={colors.orange500}
        />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontFamily: 'Lato-Regular', color: colors.grey800}}>{'Important updates to Udacitys terms of use and privacy policy'}</Text>
        </View>
        <View style={{ borderTopWidth: 1, borderTopColor: '#eee' }} />
        <View style={{ padding: 16, flexDirection: 'row', backgroundColor: colors.white }}>
          <View style={{ backgroundColor: colors.orange300, width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.white, fontSize: 26, }}>{'PC'}</Text>
          </View>
          <View style={{ flexDirection: 'column', paddingLeft: 16, flex: 1, alignSelf: 'center' }}>
            <Text style={{ color: colors.grey800, fontSize: 16, fontFamily: 'Lato-Bold' }} numberOfLines={1}>{'PET Computação'}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 8 }} numberOfLines={1}>{'31 de Maio de 2018'}</Text>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{fontFamily: 'Lato-Regular'}}>{'Important updates to Udacitys terms of use and privacy policy, As a valued member of our Udacity Community, we want to let you know that we are making some changes'}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default MensagemScreen;