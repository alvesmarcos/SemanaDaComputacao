import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../styles';

const data = [
  { id: '1', autor: 'Centro de Informática', cor: colors.primary, sigla: 'CI', titulo: 'Important updates to Udacitys terms of use and privacy policy', corpo: 'As a valued member of our Udacity Community, we want to let you know that we are making some changes'},
  { id: '1', autor: 'Centro Acadêmico Ciência da Computação', cor: colors.orange300, sigla: 'CI', titulo: 'Important updates to Udacitys terms of use and privacy policy', corpo: 'As a valued member of our Udacity Community, we want to let you know that we are making some changes'},
  { id: '1', autor: 'Centro de Informática', cor: colors.lightBlue400, sigla: 'CI', titulo: 'Important updates to Udacitys terms of use and privacy policy', corpo: 'As a valued member of our Udacity Community, we want to let you know that we are making some changes'},
  { id: '1', autor: 'Centro de Informática', cor: colors.green400, sigla: 'CI', titulo: 'Important updates to Udacitys terms of use and privacy policy', corpo: 'As a valued member of our Udacity Community, we want to let you know that we are making some changes'},
];

class NotificacaoScreen extends React.Component {
  renderItem(item) {
    return (
      <View>
        <View style={{ borderTopWidth: 1, borderTopColor: '#eee' }} />
        <TouchableOpacity style={{ padding: 16, flexDirection: 'row', backgroundColor: colors.white }}>
          <View style={{ backgroundColor: item.cor, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.white, fontSize: 30, }}>{item.sigla}</Text>
          </View>
          <View style={{ flexDirection: 'column', paddingLeft: 16, flex: 1 }}>
            <Text style={{ color: colors.grey800, fontSize: 16, fontFamily: 'Lato-Bold' }} numberOfLines={1}>{item.autor}</Text>
            <Text style={{ color: colors.grey800, fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }} numberOfLines={1}>{item.titulo}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 10 }} numberOfLines={1}>{item.corpo}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: colors.white, padding: 0 }}>
        <FlatList 
          keyExtractor={item => item.id}
          data={data}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

export default NotificacaoScreen;