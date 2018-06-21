import React, { Component } from 'react';
import { View, StyleSheet, NativeModules, findNodeHandle, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { doLogout } from '../actions/PerfilActions';

  const UIManager = NativeModules.UIManager;

 class ToolbarDropdown extends Component {
    onMenuPressed = (labels) => {
      const { onPress, doLogout  } = this.props;

      UIManager.showPopupMenu(
        findNodeHandle(this.menu),
        labels,
        () => {},
        async (result, index) => {
          if (onPress) {
            if (index === 0) {
              onPress({ action: 'menu', result, index });
              await doLogout();
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

  export default connect(null, { doLogout })(ToolbarDropdown);

  // thanks https://github.com/react-navigation/react-navigation/issues/1212