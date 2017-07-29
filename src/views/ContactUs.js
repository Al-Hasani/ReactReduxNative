import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Label from '../components/Label';

export default class ContactUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Label text="Contact Us Page" fontSize={40} color="red" align="center" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
