import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Entypo';
import { colors } from '../../styles';

class StatusFailScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      statusBarColor: colors.pink800,
      load: false,
    };
    //--
    const { navigate, goBack, dispatch } = this.props.navigation;
    this.nav = navigate;
    this.navBack = goBack;
    this.dispatch = dispatch;
  }

  resetBack() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: 'Login' })]
    });
    this.dispatch(resetAction);
  }


  render() {
    const { nome } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: colors.pink700, padding: 16 }}>
        <StatusBar
          backgroundColor={colors.pink800}
        />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Icon
            name="emoji-sad"
            color={'#fff'}
            size={120}
          />
          <Text style={{ color: '#fff', padding: 16, fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center' }}>{'Ocorreu um erro ao criar sua conta!'}</Text>
          <View style={{ marginTop: 16, }}>
            <Text style={{ color: '#fff', fontSize: 22, fontFamily: 'Lato-Regular',textAlign: 'center' }}>{nome}</Text>
            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Lato-Regular', textAlign: 'center', paddingTop: 16 }}>{'Verifique se você possui conexão com internet ou se seu e-mail está correto.'}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
          <TouchableOpacity
            onPress={() => this.resetBack()}
            style={{ backgroundColor: colors.white, marginTop: 16, borderRadius: 5 }}>
            <Text style={{ padding: 16, alignSelf: 'center', fontSize: 16, fontFamily: 'Lato-Regular', color: '#C2185B' }}>{'Tentar Novamente'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nome: state.PerfilReducer.nome,
});

export default connect(mapStateToProps, { })(StatusFailScreen);