import React from 'react';
import {
  View,
  StatusBar,
  ScrollView,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../styles';


class NotificacaoModal extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: 'Notificação',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: colors.white,
    headerStyle: {
      backgroundColor: navigation.state.params.barColor,
      elevation: 5,
    },
  });

  render() {
    const { autor, abreviatura, barColor, corpo, darkBarColor, data, titulo } = this.props;
    return (
      <ScrollView style={{ flexGrow: 1, backgroundColor: colors.white }}>
        <StatusBar
          backgroundColor={darkBarColor}
        />
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 22, fontFamily: 'Lato-Regular', color: colors.grey800}}>{titulo}</Text>
        </View>
        <View style={{ borderTopWidth: 1, borderTopColor: '#eee' }} />
        <View style={{ padding: 16, flexDirection: 'row', backgroundColor: colors.white }}>
          <View style={{ backgroundColor: barColor, width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.white, fontSize: 26, }}>{abreviatura}</Text>
          </View>
          <View style={{ flexDirection: 'column', paddingLeft: 16, flex: 1, alignSelf: 'center' }}>
            <Text style={{ color: colors.grey800, fontSize: 16, fontFamily: 'Lato-Bold' }} numberOfLines={1}>{autor}</Text>
            <Text style={{ fontSize: 14, fontFamily: 'Lato-Regular', marginTop: 8 }} numberOfLines={1}>{data}</Text>
          </View>
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{fontFamily: 'Lato-Regular'}}>{corpo}</Text>
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  abreviatura: state.NotificacaoReducer.abreviatura,
  autor: state.NotificacaoReducer.autor,
  barColor: state.NotificacaoReducer.barColor,
  corpo: state.NotificacaoReducer.corpo,
  darkBarColor: state.NotificacaoReducer.darkBarColor,
  data: state.NotificacaoReducer.data,
  titulo: state.NotificacaoReducer.titulo,
});

export default connect(mapStateToProps, {})(NotificacaoModal);