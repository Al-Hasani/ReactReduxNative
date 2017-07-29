import React, { Component } from 'react';
import { View } from 'react-native';
import QRCode from 'react-native-qrcode';

import { width, height } from '../styles';

export default class QRcode extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QRCode
          value={this.props.value}
          size={height / 6.8}
          bgColor='#000'
          fgColor='#fff'
        />
      </View>
    );
  }
}

const styles = {
  container: {
    height: height / 6,
    width: height / 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.6,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
}
