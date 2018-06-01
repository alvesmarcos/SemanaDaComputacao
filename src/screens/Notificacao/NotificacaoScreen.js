import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { mudaCamposNotificacao } from '../../actions/NotificacaoActions';
import { colors } from '../../styles';

class NotificacaoScreen extends React.Component {
  constructor(props) {
    super(props);
    
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  goNotificacaoModal(item) {
    this.props.mudaCamposNotificacao(item);
    this.nav('NotificacaoModal', { barColor: item.barColor });
  }

  renderItem(item) {
    return (
      <View>
        <View style={{ borderTopWidth: 1, borderTopColor: '#eee' }} />
        <TouchableOpacity onPress={() => this.goNotificacaoModal(item)} style={{ padding: 16, flexDirection: 'row', backgroundColor: colors.white }}>
          <View style={{ backgroundColor: item.barColor, width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: colors.white, fontSize: 30, }}>{item.abreviatura}</Text>
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
    const { listaNotificacoes } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.white, padding: 0 }}>
        <FlatList 
          keyExtractor={item => item.id}
          data={listaNotificacoes}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listaNotificacoes: state.NotificacaoReducer.listaNotificacoes,
});

export default connect(mapStateToProps, { mudaCamposNotificacao })(NotificacaoScreen);