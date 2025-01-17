import React from 'react';
import {
  View,
  StatusBar,
  FlatList,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/Feather';
import UserAvatar from 'react-native-user-avatar';
import { colors } from '../../styles';


class FaqModal extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: 'FAQ '.concat(navigation.state.params.categoria),
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

  constructor(props) {
    super(props);
    // -- check das categorias do faq    
    const categorias = this.props.navigation.state.params.categoria;
    this.listagem = [];

    switch(categorias) {
      case 'Curso':
        this.listagem = this.props.cursos;
        break;
      case 'Auxílios':
        this.listagem = this.props.auxilios;
        break;
      case 'Laboratórios':
        this.listagem = this.props.laboratorios;
        break;
      case 'Monitoria':
        this.listagem = this.props.monitorias;
        break;
      case 'Coordenação':
        this.listagem = this.props.coordenacoes;
        break;
      case 'Geral':
        this.listagem = this.props.geral;
        break;
    };
  }


  renderItem(item) {
    const { fotoUrl, pergunta, resposta, username } = item;
    return (
      <View style={{ elevation: 5, backgroundColor: '#fff', flexDirection: 'column', margin: 8 }}>
        <View style={{ flexDirection: 'row', padding: 16 }}>
          <View style={{ flex: 0.8, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ fontFamily: 'Lato-Bold', color: colors.grey800, fontSize: 16 }}>{pergunta}</Text>
          </View>
          <View style={{ flex: 0.2, alignItems: 'flex-end', }}>
            <UserAvatar name="Avishay Bar" src={fotoUrl} size={40} />
          </View>
        </View>
        <View style={{ borderTopColor: '#fafafa', borderBottomColor: '#fafafa', borderTopWidth: 1, borderBottomWidth: 1, backgroundColor: '#fafafa', padding: 16 }}>
          <Text style={{ fontFamily: 'Lato-Regular', color: colors.grey800, fontSize: 16 }}>{resposta}</Text>
        </View>
        <View style={{padding: 16 }}>
          <Text style={{ fontFamily: 'Lato-Italic', color: colors.grey800, fontSize: 16 }}>{'Respondido por '.concat(username)}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
        <StatusBar
          backgroundColor={this.props.navigation.state.params.darkBarColor}
        />
         <FlatList 
          keyExtractor={item => item.id}
          data={this.listagem}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  cursos: state.FaqReducer.cursos,
  auxilios: state.FaqReducer.auxilios,
  laboratorios: state.FaqReducer.laboratorios,
  monitorias: state.FaqReducer.monitorias,
  coordenacoes: state.FaqReducer.coordenacoes,
  geral: state.FaqReducer.geral
});

export default connect(mapStateToProps, {})(FaqModal);