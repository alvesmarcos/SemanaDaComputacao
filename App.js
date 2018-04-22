import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Routes from './src/navigation/Routes';

console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
