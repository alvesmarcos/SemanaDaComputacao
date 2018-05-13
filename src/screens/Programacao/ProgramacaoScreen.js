import React from 'react';
import {
  Text,
  StatusBar,
  View,
  Picker,
} from 'react-native';
import { colors } from '../../styles';
import Feather from 'react-native-vector-icons/Feather';
import Swipeout from 'react-native-swipeout';

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

  componentButtonSwipeout(flag) {
    if (flag==='true') {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Feather
          name={'mic'}
          size={40}
          color={colors.white}
        />
      </View>
    );
  }
  if (flag==='nada') {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  borderLeftWidth: 1,
      borderLeftColor: '#FAFAFA' }}>
        <Feather
          name={'star'}
          size={40}
          color={colors.white}
        />
      </View>
    );
  }

  if (flag==='pie-chart') {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Feather
          name={'shopping-cart'}
          size={40}
          color={colors.white}
        />
      </View>
    );
  }
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', borderLeftWidth: 1,
      borderLeftColor: '#FAFAFA' }}>
        <Feather
          name={'share-2'}
          size={40}
          color={colors.white}
        />
      </View>
    );
  }

  tipoButton() {
    return [
      {
        component: this.componentButtonSwipeout('true'),
        backgroundColor: colors.cyan500,
      },
      {
        component: this.componentButtonSwipeout('nada'),
        backgroundColor: colors.cyan500,
      }
    ];
  }

  tipoButton1() {
    return [
      {
        component: this.componentButtonSwipeout('pie-chart'),
        backgroundColor: colors.orange300,
      },
      {
        component: this.componentButtonSwipeout('nada'),
        backgroundColor: colors.orange300,
      }
    ];
  }

  render() {
    const swipeoutBtns = this.tipoButton();
    const swipeoutBtns1 = this.tipoButton1();

    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa' }}>
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
        <Swipeout
          right={swipeoutBtns}
          autoClose
          close
          accessibilityLabel='Item da Lista'
          buttonWidth={72}
          backgroundColor='transparent'
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.98, padding: 16, borderBottomColor: colors.grey100, borderBottomWidth: 1 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }}>{'Descobrindo o poder infinito'}</Text>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'calendar'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'09/07'}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'clock'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'08h - 08h45min'}</Text>
                </View>
              </View>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'map-pin'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'Auditório - Centro de Informática'}</Text>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: colors.cyan500, flex: 0.02 }} />
          </View>
        </Swipeout>
        <Swipeout
          right={swipeoutBtns1}
          autoClose
          close
          accessibilityLabel='Item da Lista'
          buttonWidth={72}
          backgroundColor='transparent'
        >
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.98, padding: 16, borderBottomColor: colors.grey100, borderBottomWidth: 1 }}>
              <Text style={{ fontFamily: 'Lato-Bold', fontSize: 16 }}>{'Coffee Break'}</Text>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'calendar'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'09/07'}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'clock'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'10h - 10h30min'}</Text>
                </View>
              </View>
              <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather name={'map-pin'} size={18} color={colors.grey400} />
                  <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'Aquário - Centro de Informática'}</Text>
                </View>
              </View>
            </View>
            <View style={{ backgroundColor: colors.orange300, flex: 0.02 }} />
          </View>
        </Swipeout>
      </View>
    );
  }
}

export default ProgramacaoScreen;