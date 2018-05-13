import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { colors } from '../../styles';
import UserAvatar from 'react-native-user-avatar';

class NotificacaoScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.windowBackground }}>
        <View style={{ padding: 16, flexDirection: 'row', borderBottomColor: colors.grey100, borderBottomWidth: 1 }}>
          <UserAvatar size={'50'} name={'CI'} />
          <View style={{ flexDirection: 'column', paddingLeft: 16, flex: 1 }}>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular' }}>{'Centro de Informática'}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }}  numberOfLines={1}>{'Important updates to Udacitys terms of use and privacy policy'}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }}  numberOfLines={1}>{'As a valued member of our Udacity Community, we want to let you know that we are making some changes'}</Text>
          </View>
        </View>
        <View style={{ padding: 16, flexDirection: 'row', borderBottomColor: colors.grey100, borderBottomWidth: 1 }}>
          <UserAvatar size={'50'} name={'PE'} />
          <View style={{ flexDirection: 'column', paddingLeft: 16, flex: 1 }}>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular' }}>{'PET-Computação'}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }}  numberOfLines={1}>{'Important updates to Udacitys terms of use and privacy policy'}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }}  numberOfLines={1}>{'As a valued member of our Udacity Community, we want to let you know that we are making some changes'}</Text>
          </View>
        </View>
        <View style={{ padding: 16, flexDirection: 'row', borderBottomColor: colors.grey100, borderBottomWidth: 1 }}>
          <UserAvatar size={'50'} name={'IE'} />
          <View style={{ flexDirection: 'column', paddingLeft: 16, flex: 1 }}>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular' }}>{'IEE'}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }}  numberOfLines={1}>{'Important updates to Udacitys terms of use and privacy policy'}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }}  numberOfLines={1}>{'As a valued member of our Udacity Community, we want to let you know that we are making some changes'}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default NotificacaoScreen;