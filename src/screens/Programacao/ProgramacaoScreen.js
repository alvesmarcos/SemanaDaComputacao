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
          title: 'Valide seu ingresso para avaliar!',
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
      return { iconNome: 'mic', texto: 'Palestra' };
    } else if (categoria === c.CHECKIN) {
      return { iconNome: 'tag', texto: 'Check-in & Inscrições' };
    } else if (categoria === c.COFFEE_BREAK) {
      return { iconNome: 'shopping-cart', texto: 'Lazer' };
    } else if (categoria === c.EMPRESA) {
      return { iconNome: 'briefcase', texto: 'Empresa' };
    }  else if (categoria === c.CORRIDA_ROBOS) {
      return { iconNome: 'award', texto: 'Competição' };
    } else if (categoria === c.DE_ALUNO_PARA_ALUNO) {
      return { iconNome: 'message-square', texto: 'Debate' };
    } else if (categoria === c.APRESENTACAO) {
      return { iconNome: 'mic', texto: 'Palestra' };
    } else if (categoria === c.LABORATORIO) {
      return { iconNome: 'monitor', texto: 'Laboratório' };
    } else if (categoria === c.MINICURSO) {
      return { iconNome: 'clipboard', texto: 'Minicurso' };
    } else if (categoria === c.GAMEDAY) {
      return { iconNome: 'award', texto: 'Competição' };
    } else if (categoria === c.MARATONA_PROGRAMACAO) {
      return { iconNome: 'award', texto: 'Competição' };
    } else if (categoria === c.MUSICA) {
      return { iconNome: 'music', texto: 'Música' };
    }
  }

  componentButtonSwipeout(item, n) {
    if (n === 2) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  borderLeftWidth: 1,
        borderLeftColor: '#FAFAFA' }}>
            <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Feather
              name={'star'}
              size={50}
              color={colors.white}
            />
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: colors.white, marginBottom: 16 }}>{'Avaliar'}</Text>
        </View>
      );
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
          <Feather
            name={'info'}
            size={50}
            color={colors.white}
          />
          </View>
          <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: colors.white, marginBottom: 16 }}>{'Info'}</Text>
      </View>
    );
  }

  tipoButton(item) {
    const { categoria } = item;
    const { iconNome, texto } = this.itemButton(item);

    let color = '';
    let darkColor = '';
    
    if (categoria === c.PALESTRA) {
      color =  colors.cyan500;
      darkColor = colors.cyan600;
    } else if (categoria === c.ABERTURA) {
      color = colors.cyan500;
      darkColor = colors.cyan500;
    } else if (categoria === c.COFFEE_BREAK) {
      color = colors.pinkX;
      darkColor = colors.pink800;
    } else if (categoria === c.CHECKIN) {
      color = colors.orange300;
      darkColor = colors.orange500;
    } else if (categoria === c.EMPRESA) {
      color = colors.cyan500;
      darkColor = colors.cyan600;
    } else if (categoria === c.CORRIDA_ROBOS) {
      color = colors.orange300;
      darkColor = colors.orange500;
    } else if (categoria === c.DE_ALUNO_PARA_ALUNO) {
      color = colors.deepPurple300;
      darkColor = colors.deepPurple400;
    } else if (categoria === c.APRESENTACAO) {
      color = colors.cyan500;
      darkColor = colors.cyan600;
    } else if (categoria === c.LABORATORIO || categoria === c.MUSICA) {
      color = colors.orange300;
      darkColor = colors.orange500;
    } else if (categoria === c.MINICURSO) {
      color = colors.deepPurple300;
      darkColor = colors.deepPurple400;
    } else if (categoria === c.GAMEDAY) {
      color = colors.pinkX;
      darkColor = colors.pink800;
    } else if (categoria === c.MARATONA_PROGRAMACAO) {
      color = colors.lightBlue400;
      darkColor = colors.lightBlue400;
    }
    return [
      {
        component: this.componentButtonSwipeout(item, 1),
        backgroundColor: color,
        onPress: () => this.nav('ProgramacaoItemModal', { barColor: color, darkBarColor: darkColor, iconNome, texto, item })
      },
      {
        component: this.componentButtonSwipeout(item, 2),
        backgroundColor: color,
        onPress: () => this.goRatingScreen(item)
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
            { (item.categoria === c.PALESTRA || item.categoria === c.ABERTURA) &&
              <View style={{ backgroundColor: colors.cyan500, flex: 0.02 }} />
            }
            { item.categoria === c.CHECKIN &&
              <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            }
            { item.categoria === c.COFFEE_BREAK &&
              <View style={{ backgroundColor: colors.pinkX, flex: 0.02 }} />
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
            { (item.categoria === c.LABORATORIO || item.categoria === c.MUSICA) &&
              <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            }
            { item.categoria === c.MINICURSO &&
              <View style={{ backgroundColor: colors.deepPurple300, flex: 0.02 }} />
            }
            { item.categoria === c.GAMEDAY &&
              <View style={{ backgroundColor: colors.pinkX, flex: 0.02 }} />
            }
             { item.categoria === c.MARATONA_PROGRAMACAO &&
              <View style={{ backgroundColor: colors.lightBlue400, flex: 0.02 }} />
            }
          </View>
        </Swipeout>
    );
  }

  render() {
    const { dia1, dia2, dia3, dia4, dia5, mes, ano } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <StatusBar
          backgroundColor={'#e0e0e0'}
          barStyle={'light-content'}
        />
        <View style={{ height: 55, backgroundColor: colors.white, padding: 16, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{mes.concat(' ').concat(ano)}</Text>
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
        { dia1.length === 0 && dia2.length === 0 && dia3.length === 0 && dia4.length === 0 && dia5.length === 0 &&
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Feather 
              name={'alert-circle'}
              size={130}
              color={'#E0E0E0'}
            />
            <Text style={{ paddingTop: 16, fontFamily: 'Lato-Regular', fontSize: 16, color: '#BDBDBD' }}>{'Em breve a programação estará disponível'}</Text>
          </View>
        }
        { this.state.dia === '1' && dia1.length !== 0 &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia1}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '2' && dia2.length !== 0 &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia2}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '3' && dia3.length !== 0 &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia3}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '4' && dia4.length !== 0 &&
          <FlatList 
            keyExtractor={item => item.id}
            data={dia4}
            renderItem={({item}) => this.renderItem(item)}
          />
        }
         { this.state.dia === '5' && dia5.length !== 0 &&
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
  mes: state.GeneralReducer.mes,
  ano: state.GeneralReducer.ano,
});

export default connect(mapStateToProps, {mudaRatingNome})(ProgramacaoScreen);