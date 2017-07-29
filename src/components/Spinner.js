import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

export default class Spinner extends Component {
  render() {

    const size = this.props.size !== undefined ? this.props.size : 'large';
    const color = this.props.color !== undefined ? this.props.color : 'white';
    const animating = this.props.animating !== undefined ? this.props.animating : false;


    return (
      <ActivityIndicator
        size={size}
        color={color}
        animating={animating}
        style={{
          opacity: animating === true ? 1 : 0,
          width: animating === true ? '100%' : 0,
          height: animating === true ? '100%' : 0,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          alignSelf: 'center',
          backgroundColor: 'rgba(0,0,0,0.6)'
        }}
      />
    );
  }
}
