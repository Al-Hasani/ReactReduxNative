import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { validateOtp } from '../actions/AuthActions';
import { inputChanged, dismessModal } from '../actions/GeneralActions'

import Label from '../components/Label';
import Input from '../components/Input';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
class OTP extends Component {
  static navigationOptions = () => {
    return {
      title: 'OTP'
    }
  }
  render() {
    const patientNumber = this.props.patientNumber;
    const identification = this.props.identification;
    const otp = this.props.otp;
    const loginToken = this.props.loginToken;
    return (
      <View style={styles.container}>
        <Label text='Please enter the 4 digits numbers when you receive it via sms' fontSize={14} color='white' align='flex-start' margin={20} />
        <Input
          margin={20}
          maxLength={4}
          placeholder='OTP Number'
          value={this.props.otp}
          onChangeText={(text) => this.props.inputChanged({ prop: 'otp', text })}
        />
        <Button margin={20}
          text='Submit'
          backgroundColor='#2c3e50'
          onPress={() => this.props.validateOtp({patientNumber, identification, otp, loginToken})}
        />
        <Button margin={20}
          text='Cancel'
          backgroundColor='#2c3e50'
          onPress={this.props.dismessModal}
        />
      <Spinner animating={this.props.animating} />
      </View>
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

mapStateToProps = ({auth}) => {
  const { patientNumber, identification, otp, loginToken, animating } = auth;
  return {
    patientNumber,
    identification,
    otp,
    loginToken,
    animating
  };
};
mapDispatchToProps = dispatch => {
  return bindActionCreators ({
    inputChanged,
    dismessModal,
    validateOtp
  }, dispatch);
};

export default connect (mapStateToProps, mapDispatchToProps)(OTP);
