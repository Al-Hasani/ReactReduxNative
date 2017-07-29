import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import Label from '../components/Label';
import DependantCard from '../components/DependantCard';
export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DependantCard />
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
