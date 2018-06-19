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

const swipeoutBtns1 = [
  {
    text: 'Button'
  }
];

class ProgramacaoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: ''
    };
  }

  componentButtonSwipeout(tipo) {
    if (tipo===c.PALESTRA) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Feather
              name={'mic'}
              size={50}
              color={colors.white}
            />
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: colors.white, marginBottom: 16 }}>{'Palestra'}</Text>
        </View>
      );
    }
    if (tipo===c.ORGANIZACAO) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center'}}>
            <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
            <Feather
              name={'align-justify'}
              size={50}
              color={colors.white}
            />
            </View>
            <Text style={{ fontSize: 16, fontFamily: 'Lato-Regular', color: colors.white, marginBottom: 16 }}>{'Descrição'}</Text>
        </View>
      );
    }
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

  tipoButton(tipo) {
    if (c.PALESTRA === tipo) {
      return [
        {
          component: this.componentButtonSwipeout('PALESTRA'),
          backgroundColor: colors.cyan500,
        },
        {
          component: this.componentButtonSwipeout(),
          backgroundColor: colors.cyan500,
        }
      ];
    }
    if (c.ORGANIZACAO === tipo) {
      return [
        {
          component: this.componentButtonSwipeout('ORGANIZACAO'),
          backgroundColor: colors.orange300,
        },
        {
          component: this.componentButtonSwipeout(),
          backgroundColor: colors.orange300,
        }
      ];
    }
  }

  renderItem(item) {
    const swipeoutBtns = this.tipoButton(item.tipo);
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
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }}>{item.nome}</Text>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'calendar'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.data}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'clock'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.horario}</Text>
                </View>
              </View>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'map-pin'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{item.local}</Text>
                </View>
              </View>
            </View>
            { item.tipo === c.PALESTRA &&
              <View style={{ backgroundColor: colors.cyan500, flex: 0.02 }} />
            }
            { item.tipo === c.ORGANIZACAO &&
              <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
            }
          </View>
        </Swipeout>
    );
  }

  render() {
    const { dia1 } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <StatusBar
          backgroundColor={'#e0e0e0'}
          barStyle={'light-content'}
        />
        <View style={{ height: 55, backgroundColor: colors.white, padding: 16, elevation: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{'Julho 2018'}</Text>
          <Picker
            selectedValue={this.state.language}
            style={{ width: 140, fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
            <Picker.Item label="Segunda-feira" value="19" />
            <Picker.Item label="Terça-feira" value="20" />
            <Picker.Item label="Quarta-feira" value="21" />
            <Picker.Item label="Quinta-feira" value="23" />
            <Picker.Item label="Sexta-feira" value="34" />
          </Picker>
        </View>
        <FlatList 
          keyExtractor={item => item.id}
          data={dia1}
          renderItem={({item}) => this.renderItem(item)}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  dia1: state.ProgramacaoReducer.dia1,
});

export default connect(mapStateToProps, {})(ProgramacaoScreen);