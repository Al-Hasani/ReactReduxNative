/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Label from '../components/Label';
import Button from '../components/Button';
import Input from '../components/Input';
import Spinner from '../components/Spinner';

import { loginViaSMS, loginViaTouchID } from '../actions/AuthActions';

import { inputChanged } from '../actions/GeneralActions';

class Login extends Component {
  loginViaTouchID = () => {
    const patientNumber = this.props.patientNumber;
    const identification =  this.props.identification;
    this.props.loginViaTouchID({patientNumber, identification});

  }
  render() {
    const patientNumber = this.props.patientNumber;
    const identification =  this.props.identification;
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        <Label text="Please enter your patient number and your identification number" color="#fff" size={12} align="flex-start" margin={20} />
        <Input
          onChangeText={(text) => this.props.inputChanged({ prop: 'patientNumber', text })}
          value={this.props.patientNumber}
          maxLength={6}
          keyboardType="numeric"
          margin={20}
          placeholder="Patient Number"
        />
        <Input
          onChangeText={(text) => this.props.inputChanged({ prop: 'identification', text })}
          value={this.props.identification}
          maxLength={10}
          keyboardType="numeric"
          margin={20}
          placeholder="Identification"
        />
        <Button
          text="Login via SMS"
          backgroundColor="#2c3e50"
          onPress={() => this.props.loginViaSMS({patientNumber, identification})}
          margin={20}
        />
        <Button
          text="Login via Touch ID"
          backgroundColor="#2c3e50"
          onPress={this.loginViaTouchID}
          margin={20}
        />
        <Spinner animating={this.props.animating}/>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#16a085',
  }
});

const mapStateToProps = state => {
  return {
    patientNumber: state.auth.patientNumber,
    identification: state.auth.identification,
    status: state.auth.status,
    nav: state.nav,
    animating: state.auth.animating
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    loginViaSMS,
    loginViaTouchID,
    inputChanged
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
