import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { colors } from '../../styles';

class TicketScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.windowBackground }}>
        <View style={{ marginTop: 5, flexDirection: 'row' }}>
           
            <View style={{ flex: 0.68, backgroundColor: colors.white, padding: 16 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }}>{'19ª Semana da Computação'}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                  <Feather name={'calendar'} size={18} color={colors.grey600} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'09 de Julho de 2018'}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                  <Feather name={'map-pin'} size={18} color={colors.grey600} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'Centro de Informática'}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: colors.green400, flex: 0.02 }} />
            <View style={{ backgroundColor: '#EEEEEE', flex: 0.30, justifyContent: 'center', alignItems: 'center', }}>
              <FontAwesome
                name={'qrcode'}
                size={80}
                color={colors.black}
              />
            </View>
        </View>

        <View style={{ marginTop: 5, flexDirection: 'row' }}>
           
            <View style={{ flex: 0.68, backgroundColor: colors.white, padding: 16 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }}>{'19ª Semana da Computação'}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                  <Feather name={'calendar'} size={18} color={colors.grey600} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'09 de Julho de 2018'}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                  <Feather name={'map-pin'} size={18} color={colors.grey600} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'Centro de Informática'}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            <View style={{ backgroundColor: '#EEEEEE', flex: 0.30, justifyContent: 'center', alignItems: 'center', }}>
              <FontAwesome
                name={'qrcode'}
                size={80}
                color={colors.black}
              />
            </View>
        </View>

        <View style={{ marginTop: 5, flexDirection: 'row' }}>
           
            <View style={{ flex: 0.68, backgroundColor: colors.white, padding: 16 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }}>{'19ª Semana da Computação'}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                  <Feather name={'calendar'} size={18} color={colors.grey600} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'09 de Julho de 2018'}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                  <Feather name={'map-pin'} size={18} color={colors.grey600} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'Centro de Informática'}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#D50000', flex: 0.02 }} />
            <View style={{ backgroundColor: '#EEEEEE', flex: 0.30, justifyContent: 'center', alignItems: 'center', }}>
              <FontAwesome
                name={'qrcode'}
                size={80}
                color={colors.black}
              />
            </View>
        </View>
 
      </View>
    );
  }
}

export default TicketScreen;