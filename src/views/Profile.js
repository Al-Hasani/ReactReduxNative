import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, Platform, TouchableOpacity } from 'react-native';
const { width, height } = Dimensions.get('window');
const buttonSize = (height - (height/3) - (height/12) - (Platform.OS === 'ios' ? 113 : 125)) / 2;
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mainColor, subColor } from '../styles';

import { getPatientProfile } from '../actions/ProfileActions';
import { dismessModal, navigate } from '../actions/GeneralActions';

import Label from '../components/Label';
import Button from '../components/Button';
import ProfileHeader from '../components/ProfileHeader';
import ProfileButton from '../components/ProfileButton';
import Spinner from '../components/Spinner';
import Svg from '../components/Svg';

class Profile extends Component {
  state = {
    rerender: true,
  }
  static navigationOptions = ({navigation}) => {
    return {
      title: 'Profile',
      headerRight: (
        <TouchableOpacity style={{margin: 10}} onPress={() => navigation.state.params.dismessModal()}>
          <Svg size='30' source={require('../images/svgs/logout.svg')} />
        </TouchableOpacity>
      )
    }
  }
  componentWillMount() {
    let ptno = this.props.navigation.state.params.patientNumber;
    let token = this.props.token;
    this.props.getPatientProfile({ptno, token});
    this.props.navigation.setParams({ dismessModal: this.props.dismessModal });
  }
  componentWillUpdate() {
    if (this.state.rerender === true) {
      this.setState({
        rerender: false,
      });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <ProfileHeader
          patientNumber={this.props.patientNumber}
          name={this.props.name}
          mobile={this.props.mobile}
          birthDate={this.props.birthDate}
          identification={this.props.identification}
          bloodType={this.props.bloodType}
        />
        <View style={styles.wrapper}>
          <ScrollView>
            <View style={styles.buttonSection}>
              <ProfileButton text='Appointments' color='#999' fontSize={15} />
              <ProfileButton text='My Appointments' color='#999' fontSize={15} />
            </View>
            <View style={styles.buttonSection}>
              <ProfileButton text='Dependants' color='#999' fontSize={15} onPress={()=>this.props.navigate('Dependants', this.props.patientNumber)} />
              <ProfileButton text='Diagnosis' color='#999' fontSize={15} />
            </View>
          </ScrollView>
        </View>
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
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: buttonSize
  }
});

mapStateToProps = ({auth, profile}) => {
  return {
    ptno: auth.patientNumber,
    token: auth.token,
    animating: auth.animating,
    patientNumber: profile.patient.patientNumber,
    identification: profile.patient.identification,
    name: profile.patient.name,
    nameAr: profile.patient.nameAr,
    mobile: profile.patient.mobile,
    birthDate: profile.patient.birthDate,
    mobile: profile.patient.mobile,
    sex: profile.patient.sex,
    sexAr: profile.patient.sexAr,
    bloodType: profile.patient.bloodType,
    nationality: profile.patient.nationality,
    loading: auth.loading
  }
}
mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getPatientProfile,
    dismessModal,
    navigate
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
