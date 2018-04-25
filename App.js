import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import SemanaDaComputacao from './src/build/SemanaDaComputacao';
import reducers from './src/reducers';

//-- retira warnings
console.disableYellowBox = true;

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SemanaDaComputacao />
      </Provider>
    );
  }
}
