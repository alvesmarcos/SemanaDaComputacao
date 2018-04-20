import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BottomNavigation from './src/navigation/BottomNavigation';


console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return <BottomNavigation />;
  }
}
