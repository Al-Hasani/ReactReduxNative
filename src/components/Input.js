/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TextInput,
  Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class App extends Component {
  render() {

    const backgroundColor = this.props.backgroundColor !== undefined ? this.props.backgroundColor : '#fff';
    const margin = this.props.margin !== undefined ? this.props.margin : 5;
    const borderRadius = this.props.borderRadius !== undefined ? this.props.borderRadius : 5;
    const marginTop = this.props.marginTop !== undefined ? this.props.marginTop : 5;
    const marginBottom = this.props.marginBottom !== undefined ? this.props.margin : 5;
    const buttonHeight = this.props.height !== undefined ? (width * 2 / height) * this.props.height : (width * 2 / height) * 40;
    const color = this.props.color !== undefined ? this.props.color : 'black';

    const keyboardType = this.props.keyboardType !== undefined ? this.props.keyboardType : 'default';
    const maxLength = this.props.maxLength !== undefined ? this.props.maxLength: 100;
    const onChangeText = this.props.onChangeText;
    const value = this.props.value;
    const secureTextEntry = this.props.secureTextEntry !== undefined ? this.props.secureTextEntry : false;
    const autoCorrect = this.props.autoCorrect !== undefined ? this.props.autoCorrect : false;
    const placeholder = this.props.placeholder !== undefined ? this.props.placeholder : null;
    const returnKeyType = this.props.returnKeyType !== undefined ? this.props.returnKeyType : 'default';
    const textAlign = this.props.textAlign !== undefined ? this.props.textAlign : 'center';

    return (
      <TextInput
        style={{
          backgroundColor,
          width: width - (margin * 2),
          height: (width * 2 / height) * 40,
          margin,
          marginTop,
          marginBottom,
          borderRadius,
          padding: 5,
          color,
          alignSelf: 'center',
          textAlign
        }}

        keyboardType={keyboardType}
        maxLength={maxLength}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        returnKeyType={returnKeyType}
      />
    );
  }
}
