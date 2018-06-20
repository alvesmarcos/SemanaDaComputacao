import React from 'react';
import {
  Text,
  StatusBar,
  View,
  Picker,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import { colors } from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import Swipeout from 'react-native-swipeout';
import { constants as c } from '../../util';

class ProgramacaoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dia: '1'
    };
  }

  itemButton(tipo) {
    if (tipo === c.PALESTRA) {
      return { iconNome: 'mic', texto: 'Palestra' };
    } else if (tipo === c.ABERTURA) {
      return { iconNome: 'align-justify', texto: 'Sobre' };
    } else if (tipo === c.CHECKIN) {
      return { iconNome: 'tag', texto: 'Informações' };
    } else if (tipo === c.COFFEE_BREAK) {
      return { iconNome: 'shopping-cart', texto: 'Cardápio' };
    } else if (tipo === c.EMPRESA) {
      return { iconNome: 'briefcase', texto: 'Empresa' };
    }  else if (tipo === c.CORRIDA_ROBOS) {
      return { iconNome: 'flag', texto: 'Regras' };
    } else if (tipo === c.DE_ALUNO_PARA_ALUNO) {
      return { iconNome: 'message-square', texto: 'Temas' };
    }
    return { iconNome: 'star', texto: 'Avaliar' };
  }

  componentButtonSwipeout(tipo) {
    const { iconNome, texto } = this.itemButton(tipo);
    if (texto === 'Avaliar') {
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  borderLeftWidth: 1,
        borderLeftColor: '#FAFAFA' }}>
            <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Feather
              name={iconNome}
              size={50}
              color={colors.white}
            />
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: colors.white, marginBottom: 16 }}>{texto}</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Feather
            name={iconNome}
            size={50}
            color={colors.white}
          />
          </View>
          <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: colors.white, marginBottom: 16 }}>{texto}</Text>
      </View>
    );
  }

  tipoButton(tipo) {
    let color = '';
    
    if (tipo === c.PALESTRA) {
      color =  colors.cyan500;
    } else if (tipo === c.ABERTURA) {
      color = colors.orange300;
    } else if (tipo === c.COFFEE_BREAK) {
      color = colors.primary;
    } else if (tipo === c.CHECKIN) {
      color = colors.orange300;
    } else if (tipo === c.EMPRESA) {
      color = colors.cyan500;
    } else if (tipo === c.CORRIDA_ROBOS) {
      color = colors.orange300;
    } else if (tipo === c.DE_ALUNO_PARA_ALUNO) {
      color = colors.deepPurple300;
    }
    return [
      {
        component: this.componentButtonSwipeout(tipo),
        backgroundColor: color,
      },
      {
        component: this.componentButtonSwipeout(),
        backgroundColor: color,
      }
    ];
  }

  renderItem(item) {
    const swipeoutBtns = this.tipoButton(item.categoria);
    return (
      <Swipeout
          right={swipeoutBtns}
          autoClose
          close
          accessibilityLabel='Item da Lista'
          buttonWidth={130}
          backgroundColor='transparent'
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.98, padding: 16, borderBottomColor: colors.grey100, borderBottomWidth: 1 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }} numberOfLines={1}>{item.nome}</Text>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'calendar'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.data}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'clock'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.horaInicio}</Text>
                </View>
              </View>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'map-pin'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.local}</Text>
                </View>
              </View>
            </View>
            { item.categoria === c.PALESTRA &&
              <View style={{ backgroundColor: colors.cyan500, flex: 0.02 }} />
            }
            { item.categoria === c.ABERTURA &&
              <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            }
            { item.categoria === c.CHECKIN &&
              <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            }
            { item.categoria === c.COFFEE_BREAK &&
              <View style={{ backgroundColor: colors.primary, flex: 0.02 }} />
            }
            { item.categoria === c.EMPRESA &&
              <View style={{ backgroundColor: colors.cyan500, flex: 0.02 }} />
            }
            { item.categoria === c.DE_ALUNO_PARA_ALUNO &&
              <View style={{ backgroundColor: colors.deepPurple300 , flex: 0.02 }} />
            }
            { item.categoria === c.CORRIDA_ROBOS &&
              <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            }
          </View>
        </Swipeout>
    );
  }

  render() {
    const { dia1, dia2, dia3, dia4, dia5 } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <StatusBar
          backgroundColor={'#e0e0e0'}
          barStyle={'light-content'}
        />
        <View style={{ height: 55, backgroundColor: colors.white, padding: 16, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{'Julho 2018'}</Text>
          <Picker
            selectedValue={this.state.dia}
            style={{ width: 140, fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}
            mode={'dropdown'}
            onValueChange={(itemValue) => this.setState({ dia: itemValue })}>
            <Picker.Item label="Segunda-feira" value="1" />
            <Picker.Item label="Terça-feira" value="2" />
            <Picker.Item label="Quarta-feira" value="3" />
            <Picker.Item label="Quinta-feira" value="4" />
            <Picker.Item label="Sexta-feira" value="5" />
          </Picker>
        </View>
        { this.state.dia === '1' &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia1}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '2' &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia2}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '3' &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia3}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '4' &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia4}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '5' &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia5}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dia1: state.ProgramacaoReducer.dia1,
  dia2: state.ProgramacaoReducer.dia2,
  dia3: state.ProgramacaoReducer.dia3,
  dia4: state.ProgramacaoReducer.dia4,
  dia5: state.ProgramacaoReducer.dia5,
});

export default connect(mapStateToProps, {})(ProgramacaoScreen);