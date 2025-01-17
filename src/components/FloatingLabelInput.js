import React from 'react';
import {
  Animated,
  Text,
  TextInput,
  View,
  StyleSheet,
  Keyboard,
} from 'react-native';
import { colors } from '../styles';

const styles = StyleSheet.create({
  input: {
    height: 44, 
    fontSize: 22,
    fontFamily: 'Lato-Regular',
    color: colors.white,
    borderBottomWidth: 0
  }
});

class FloatingLabelInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillMount() {
    this._animatedIsFocused = new Animated.Value(0);
    Keyboard.dismiss();
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
      duration: 200,
    }).start();
  }
  
  handleFocus() {
    this.setState({ isFocused: true });
  }

  handleBlur() {
    this.setState({ isFocused: false });
  }

  render() {
    const { label, helpText, showHelpText, ...props } = this.props;
    const { isFocused } = this.state;
    //--
    const labelStyle = {
      position: 'absolute',
      left: 4,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 0]
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [22, 14]
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#eee', colors.white]
      }),
      fontFamily: 'Lato-Regular'
    }; 

    return (
      <View style={{ paddingTop: 18 }}>
        <Animated.Text style={labelStyle}>{ label }</Animated.Text>
        <TextInput
          { ...props }
          style={styles.input}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          selectionColor={colors.white}
          underlineColorAndroid='rgba(0,0,0,0)'
          tintColor={colors.white}
          autoFocus
        />
        <Text style={{ left: 4, fontSize: 14,  fontFamily: 'Lato-Regular', color: colors.grey100 }}>{ helpText }</Text>
      </View>
    );
  }
}

export default FloatingLabelInput;