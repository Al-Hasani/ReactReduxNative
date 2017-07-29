/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
export default class App extends Component {
  render() {

    const fontSize = this.props.fontSize !== undefined ? (width * 2 / height) * this.props.fontSize : (width * 2 / height) * 12;
    const color = this.props.color !== undefined ? this.props.color : '#fff';
    const alignSelf = this.props.alignSelf !== undefined ? this.props.alignSelf : 'flex-start';
    const margin = this.props.margin !== undefined ? this.props.margin: 0;
    const marginTop = this.props.marginTop !== undefined ? this.props.marginTop : 0;
    const marginBottom = this.props.marginBottom !== undefined ? this.props.marginBottom : 0;


    return (
      <Text
        style={{
          fontSize,
          color,
          alignSelf,
          margin,
          marginTop,
          marginBottom,
        }}
        onChangeText={this.props.onChangeText}
        value={this.props.value}
      >
        {this.props.text}
      </Text>
    );
  }
}
