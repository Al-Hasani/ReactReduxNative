import React, { Component } from 'react';
import SvgUri from 'react-native-svg-uri';

export default class Svg extends Component {
  render() {
    return (
      <SvgUri
        width={this.props.size}
        height={this.props.size}
        fill={this.props.fill}
        source={this.props.source}
      />
    );
  }
}
