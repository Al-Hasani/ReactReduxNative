/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { width, height } from '../styles';

import Label from './Label';
import QRcode from './QRcode';
export default class ProfileHeader extends Component {
  render() {
    return (
      <View style={{alignSelf: 'stretch'}}>
        <View style={styles.header}>
          <QRcode value={this.props.patientNumber !== undefined ? this.props.patientNumber.toString() : ''} />
          <Label text={this.props.patientNumber} fontSize={14} alignSelf='center' />
          <Label text={this.props.name} fontSize={14} alignSelf='center' />
          <Label text={this.props.mobile} fontSize={14} alignSelf='center' />
        </View>
        <View style={styles.moreInfo}>
          <View style={styles.moreInfoSection}>
            <Label text='Date of Birth' fontSize={13} alignSelf='center' />
            <Label text={this.props.birthDate} fontSize={13} alignSelf='center' />
          </View>
          <View style={[styles.moreInfoSection, {borderLeftWidth: 1, borderRightWidth: 1}]}>
            <Label text='Identification' fontSize={13} alignSelf='center' />
            <Label text={this.props.identification} fontSize={13} alignSelf='center' />
          </View>
          <View style={styles.moreInfoSection}>
            <Label text='Blood Type' fontSize={13} alignSelf='center' />
            <Label text={this.props.bloodType} fontSize={13} alignSelf='center' />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  header: {
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#16a085'
  },
  moreInfo: {
    height: height / 12,
    backgroundColor: '#16a085',
    alignSelf: 'stretch',
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#fff'
  },
  moreInfoSection: {
    flex: 1,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}
