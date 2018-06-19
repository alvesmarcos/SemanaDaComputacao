import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dash from 'react-native-dash';
import { colors } from '../../styles';

class TicketScreen extends React.Component {
  renderItem(item) {
    return (
      <View style={{ marginBottom: 4 }}>
        <View style={{ flexDirection: 'column', backgroundColor: colors.white, borderColor: colors.gray300, borderTopWidth: 1, borderRightWidth: 1, borderLeftWidth: 1 }}>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18, color: colors.grey800, padding: 16 }}>{item.evento}</Text>
          <Dash style={{ height: 1 }} dashColor={colors.gray300} />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: colors.white, borderColor: colors.gray300, borderRightWidth: 1, borderLeftWidth: 1 }}>
          <View style={{ flexDirection: 'row', padding: 16 }}>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{item.data}</Text>
          </View>
          <View style={{ flexDirection: 'row', padding: 16 }}>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{item.horario}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 16, backgroundColor: colors.white, borderColor: colors.gray300, borderRightWidth: 1, borderLeftWidth: 1 }}>
          <View style={{ flexDirection: 'column', justifyContent: 'space-around' }}>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{this.props.nome}</Text>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{'R$ 0,00'}</Text>
          </View>
          <TouchableOpacity style={{ flexDirection: 'row' }}>
            <FontAwesome
              name={'qrcode'}
              size={80}
              color={colors.black}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'column', alignItems: 'center', backgroundColor: colors.orange300, paddingTop: 6 }}>
          <View style={{ backgroundColor: colors.white, width: 15, height: 15, borderRadius: 7, marginBottom: -7 }} />
        </View>
      </View>
    );
  }

  render() {
    const { listaIngressos } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.white, padding: 8 }}>
        <FlatList 
          data={listaIngressos}
          renderItem={({ item }) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  listaIngressos: state.TicketReducer.listaIngressos,
  nome: state.PerfilReducer.nome
});

export default connect(mapStateToProps, {})(TicketScreen);