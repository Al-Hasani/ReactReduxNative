import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';

import { width, height, mainColor, subColor, boysColor, girlsColor } from '../styles';

import Label from './Label';
import QRcode from './QRcode';

export default class DependantCard extends Component {
  render() {
    const color = this.props.sex === 'M' ? boysColor : girlsColor;
    return (
      <TouchableOpacity style={styles.card} key={this.props.key} onPress={this.props.onPress}>
        <View style={[styles.topSection, {backgroundColor: color}]}>
          <View style={styles.genderSection}>
            <Label text='Gender' />
            <Label text={this.props.sex} alignSelf='center' />
          </View>
          <QRcode value={this.props.patientNumber} />
          <Label text={this.props.patientNumber} alignSelf='center' />
          <Label text={this.props.name} alignSelf='center' />
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.cardInfo}>
            <Label text='Identification' alignSelf='center' color='#999' />
            <Label text={this.props.identification} alignSelf='center' color={color} />
          </View>
          <View style={styles.cardInfo}>
            <Label text='Date of Birth' alignSelf='center' color='#999' />
            <Label text={this.props.birthDate} alignSelf='center' color={color} />
          </View>
        </View>
        <View style={styles.bottomSection}>
          <View style={styles.cardInfo}>
            <Label text='Blood Type' alignSelf='center' color='#999' />
            <Label text={this.props.bloodType} alignSelf='center' color={color} />
          </View>
          <View style={styles.cardInfo}>
            <Label text='Nationality' alignSelf='center' color='#999' />
            <Label text={this.props.nationality} alignSelf='center' color={color} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = {
  card: {
    flex: 1,
    margin: height / 20,
    borderRadius: 10,
    backgroundColor: subColor,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    width: width - ((height/20) * 2)
  },
  topSection: {
    backgroundColor: boysColor,
    padding: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  genderSection: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    margin: 5
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardInfo: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'stretch',
  }
}
