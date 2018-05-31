import React from 'react';
import {
  View,
  StatusBar,
  Image,
} from 'react-native';
import { app as firebaseApp } from '../../config';
import { colors } from '../../styles'; 
 
const imageSDC = require('../../../assets/img/logo-sem-fundo-branca.png');

class Init extends React.Component {
  constructor(props) {
    super(props);
    
    this.cores = [
      { body: colors.primary , header: colors.primaryDark },
      { body: colors.orange300 , header: colors.orange500 },
      { body: colors.deepPurple300 , header: colors.deepPurple400 },
      { body: colors.cyan500 , header: colors.cyan600 },
    ];
  }

  _random = (arr) => arr[Math.floor(Math.random() * arr.length)];

  render() {
    const cor = this._random(this.cores);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: cor.body }}>
        <StatusBar backgroundColor={cor.header} />
        <View style={{ backgroundColor: cor.header, width: 120, height: 120, borderRadius: 75, justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={imageSDC}
            style={{ height: 80, width: 70 }}
          />
        </View>
      </View>
    );
  }
}

export default Init;
