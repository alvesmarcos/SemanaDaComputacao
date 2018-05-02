import React from 'react';
import {
  Text,
  StatusBar,
  View,
  Picker,
} from 'react-native';
import { colors } from '../../styles';
import Feather from 'react-native-vector-icons/Feather';

class ProgramacaoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      language: ''
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fafafa'}}>
        <StatusBar
          backgroundColor={'#e0e0e0'}
          barStyle={'light-content'}
        />
        <View style={{ height: 55, backgroundColor: colors.white, padding: 16, elevation:5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}>{'Julho 2018'}</Text>
          <Picker
            selectedValue={this.state.language}
            style={{ width: 140, fontFamily: 'Lato-Regular', fontSize: 16, color: colors.grey800 }}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Segunda-feira" value="19" />
            <Picker.Item label="Terça-feira" value="20" />
            <Picker.Item label="Quarta-feira" value="21" />
            <Picker.Item label="Quinta-feira" value="23" />
            <Picker.Item label="Sexta-feira" value="34" />                                    
          </Picker>
        </View>
        <View style={{ flexDirection: 'row'}}>
          <View style={{ flex: 0.98, padding: 16, borderBottomColor: colors.grey100, borderBottomWidth: 1 }}>
            <Text style={{ fontFamily: 'Lato-Regular', fontSize: 18 }}>{'Descobrindo o poder infinito'}</Text>
            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name={'calendar'} size={18} color={colors.grey400} />
                <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'19/07'}</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'Palestra'}</Text>
              </View>
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name={'clock'} size={18} color={colors.grey400} />
                <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'8h - 8h45min'}</Text>
              </View>
            </View>
            <View style={{ marginTop: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Feather name={'map-pin'} size={18} color={colors.grey400} />
                <Text style={{ paddingLeft: 16, fontFamily: 'Lato-Regular', fontSize: 16 }}>{'Auditório - Centro de Informática'}</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: colors.primary, flex: 0.02 }} />
        </View>
      </View>
    );
  }
}

export default ProgramacaoScreen;