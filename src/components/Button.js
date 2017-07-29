/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class App extends Component {
  render() {

    const backgroundColor = this.props.backgroundColor !== undefined ? this.props.backgroundColor : '#ee2332';
    const margin = this.props.margin !== undefined ? this.props.margin : 5;
    const borderRadius = this.props.borderRadius !== undefined ? this.props.borderRadius : 5;
    const marginTop = this.props.marginTop !== undefined ? this.props.marginTop : 5;
    const marginBottom = this.props.marginBottom !== undefined ? this.props.margin : 5;
    const buttonHeight = this.props.height !== undefined ? (width * 2 / height) * this.props.height : (width * 2 / height) * 40;

    const color = this.props.color !== undefined ? this.props.color : '#fff';
    const fontSize = this.props.size !== undefined ? (width * 2 / height) * this.props.size : (width * 2 / height) * 12;

    return (
      <TouchableOpacity
        style={{
          backgroundColor,
          width: width - (margin * 2),
          height: (width * 2 / height) * 40,
          margin,
          marginTop,
          marginBottom,
          borderRadius,
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}
        onPress={this.props.onPress}
      >
        <Text
          style={{
            color,
            fontSize
          }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}
