import React, { Component } from 'react';
import { View, StyleSheet, NativeModules, findNodeHandle, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

  const UIManager = NativeModules.UIManager;

  export default class ToolbarDropdown extends Component {
    onMenuPressed = (labels) => {
      const { onPress  } = this.props;

      UIManager.showPopupMenu(
        findNodeHandle(this.menu),
        labels,
        () => {},
        (result, index) => {
          if (onPress) {
            if (index === 0) {
              onPress({ action: 'menu', result, index });
            }
          }
        },
      );
    };

    render() {
      const { labels } = this.props;

      return (
        <View style={{flexDirection: 'row', backgroundColor: '#fff' }}>
          <View>
            <View
              ref={c => this.menu = c}
              style={{
                backgroundColor: 'transparent',
                width: 1,
                height: StyleSheet.hairlineWidth,
              }}
            />
            <MaterialIcons
              name="more-vert"
              onPress={() => this.onMenuPressed(labels)}
              style={{ marginRight: 10, color: '#424242' }}
              size={23}
            />
          </View>
        </View>
      )
    }
  }

  // thanks https://github.com/react-navigation/react-navigation/issues/1212