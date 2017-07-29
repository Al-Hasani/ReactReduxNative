import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Label from '../components/Label';

export default class Clinics extends Component {
  static navigationOptions = () => {
    return {
      title: 'Clinics',
      tabBarLabel: 'Clinics',
      headerStyle: {backgroundColor: '#16a085'},
      headerTitleStyle: { color: '#fff' },
      headerBackTitleStyle: { color: '#fff' }
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Label text="Clinics Page" fontSize={20} color="red" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});
