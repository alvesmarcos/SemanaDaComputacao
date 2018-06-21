import React from 'react';
import {
  View,
  StatusBar,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScannerScreen extends React.Component {
  static navigationOptions =  ({ navigation }) => ({
    title: '',
    headerTitleStyle: {
      fontFamily: 'Lato-Regular',
      fontWeight: 'normal',
    },
    headerTintColor: '#424242',
    headerStyle: {
      backgroundColor: '#fff',
      elevation: 0,
    },
  });

  constructor(props) {
    super(props);
    
    const { navigate } = this.props.navigation;
    this.nav = navigate;
  }

  goNotificacaoModal(item) {
    //this.props.mudaCamposNotificacao(item);
    this.nav('NotificacaoModal', { barColor: item.barColor });
  }

  onSuccess(e) {
    if (e.data === this.props.id) {
      this.nav('CheckOk');
    } else {
      this.nav('CheckFail');
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff'}}>
        <StatusBar backgroundColor={'#bdbdbd'} />
        <QRCodeScanner
          onRead={this.onSuccess.bind(this)}
          showMarker={true}
          fadeIn={false}
        />
        </View>
    );
  }
}

const mapStateToProps = state => ({
  id: '',
  data: '',
  dia: '',
  evento: '',
  horario: '',
});

export default connect(mapStateToProps, {})(ScannerScreen);
