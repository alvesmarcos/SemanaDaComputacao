import React from 'react';
import {
  Text,
  StatusBar,
  View,
  Alert,
  Picker,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import { connect } from 'react-redux';
import { colors } from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import Swipeout from 'react-native-swipeout';
import { constants as c } from '../../util';
import { mudaRatingNome } from '../../actions/RatingActions';

class ProgramacaoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dia: '1'
    };
    //--
    const { navigate, goBack } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
  }

  goRatingScreen(item) {
    const { listagemAvaliacoes, listaIngressos } = this.props;
    const { nome, id, dia } = item;
    
    for (let i = 0; i < listagemAvaliacoes.length; ++i) {
      if (listagemAvaliacoes[i].itemId === id) {
        Snackbar.show({
          title: 'Esse item já avaliado!',
          duration: Snackbar.LENGTH_LONG,
          action: {
            title: 'OK',
            color: colors.primary,
            onPress: () => { /* Do something. */ },
          },
        });
        return;
      }
    }
    for (let i = 0; i < listaIngressos.length; ++i) {
      if ((listaIngressos[i].cor === colors.pink700 || listaIngressos[i].cor === colors.orange300)
          && dia === listaIngressos[i].dia) {
        Snackbar.show({
          title: 'Você não pode avaliar o item sem participar!',
          duration: Snackbar.LENGTH_LONG,
          action: {
            title: 'OK',
            color: colors.primary,
            onPress: () => { /* Do something. */ },
          },
        });
        return;
      } 
    }

    this.props.mudaRatingNome({ nome, id });
    this.nav('Rating');
  }

  itemButton(item) {
    const { categoria } = item;

    if (categoria === c.PALESTRA) {
      return { iconNome: 'mic', texto: 'Palestra' };
    } else if (categoria === c.ABERTURA) {
      return { iconNome: 'align-justify', texto: 'Sobre' };
    } else if (categoria === c.CHECKIN) {
      return { iconNome: 'tag', texto: 'Informações' };
    } else if (categoria === c.COFFEE_BREAK) {
      return { iconNome: 'shopping-cart', texto: 'Cardápio' };
    } else if (categoria === c.EMPRESA) {
      return { iconNome: 'briefcase', texto: 'Empresa' };
    }  else if (categoria === c.CORRIDA_ROBOS) {
      return { iconNome: 'flag', texto: 'Regras' };
    } else if (categoria === c.DE_ALUNO_PARA_ALUNO) {
      return { iconNome: 'message-square', texto: 'Temas' };
    } else if (categoria === c.APRESENTACAO) {
      return { iconNome: 'mic', texto: 'Apresentação' };
    } else if (categoria === c.LABORATORIO) {
      return { iconNome: 'monitor', texto: 'Laboratório' };
    } else if (categoria === c.MINICURSO) {
      return { iconNome: 'clipboard', texto: 'Minicurso' };
    } else if (categoria === c.GAMEDAY) {
      return { iconNome: 'grid', texto: 'Jogos' };
    } else if (categoria === c.MARATONA_PROGRAMACAO) {
      return { iconNome: 'align-justify', texto: 'Regras' };
    }
  }

  componentButtonSwipeout(item, n) {
    const { iconNome, texto } = this.itemButton(item);
    if (n === 2) {
      return (
        <TouchableOpacity onPress={() => this.goRatingScreen(item)} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  borderLeftWidth: 1,
        borderLeftColor: '#FAFAFA' }}>
            <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Feather
              name={'star'}
              size={50}
              color={colors.white}
            />
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: colors.white, marginBottom: 16 }}>{'Avaliar'}</Text>
        </TouchableOpacity>
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

  tipoButton(item) {
    const { categoria } = item;
    let color = '';
    
    if (categoria === c.PALESTRA) {
      color =  colors.cyan500;
    } else if (categoria === c.ABERTURA) {
      color = colors.orange300;
    } else if (categoria === c.COFFEE_BREAK) {
      color = colors.primary;
    } else if (categoria === c.CHECKIN) {
      color = colors.orange300;
    } else if (categoria === c.EMPRESA) {
      color = colors.cyan500;
    } else if (categoria === c.CORRIDA_ROBOS) {
      color = colors.orange300;
    } else if (categoria === c.DE_ALUNO_PARA_ALUNO) {
      color = colors.deepPurple300;
    } else if (categoria === c.APRESENTACAO) {
      color = colors.cyan500;
    } else if (categoria === c.LABORATORIO) {
      color = colors.orange300;
    } else if (categoria === c.MINICURSO) {
      color = colors.deepPurple300;
    } else if (categoria === c.GAMEDAY) {
      color = colors.green400;
    } else if (categoria === c.MARATONA_PROGRAMACAO) {
      color = colors.lightBlue400;
    }
    return [
      {
        component: this.componentButtonSwipeout(item, 1),
        backgroundColor: color,
      },
      {
        component: this.componentButtonSwipeout(item, 2),
        backgroundColor: color,
      }
    ];
  }

  renderItem(item) {
    const swipeoutBtns = this.tipoButton(item);
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
            { item.categoria === c.APRESENTACAO &&
              <View style={{ backgroundColor: colors.cyan500, flex: 0.02 }} />
            }
            { item.categoria === c.LABORATORIO &&
              <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            }
            { item.categoria === c.MINICURSO &&
              <View style={{ backgroundColor: colors.deepPurple300, flex: 0.02 }} />
            }
            { item.categoria === c.GAMEDAY &&
              <View style={{ backgroundColor: colors.green400, flex: 0.02 }} />
            }
             { item.categoria === c.MARATONA_PROGRAMACAO &&
              <View style={{ backgroundColor: colors.lightBlue400, flex: 0.02 }} />
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
  listagemAvaliacoes: state.RatingReducer.listagemAvaliacoes,
  listaIngressos: state.TicketReducer.listaIngressos,
});

export default connect(mapStateToProps, {mudaRatingNome})(ProgramacaoScreen);