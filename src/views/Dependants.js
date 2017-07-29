import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';
import Carousel from 'react-native-looped-carousel';

import Spinner from '../components/Spinner';
import Label from '../components/Label';
import { width, height, mainColor, subColor } from '../styles';

import { getDependants } from '../actions/ProfileActions';
import { navigate } from '../actions/GeneralActions';
import DependantCard from '../components/DependantCard';

class Dependants extends Component {
  static navigationOptions = () => {
    return {
      title: 'Dependants',
    }
  }
  componentWillMount() {
    const ptno = this.props.navigation.state.params.patientNumber;
    const token = this.props.token;
    this.props.getDependants({ptno, token});
  }
  renderCard = (dependants) => {
    return dependants.map((dependant, index) => {
      return (
        <DependantCard
          key={index}
          patientNumber={dependant.patientNumber !== undefined ? dependant.patientNumber.toString() : ''}
          sex={dependant.sex}
          name={dependant.name}
          identification={dependant.identification}
          birthDate={dependant.birthDate}
          bloodType={dependant.bloodType !== null ? dependant.bloodType : 'Null'}
          nationality={dependant.nationality}
          onPress={()=>this.props.navigate('Profile', dependant.patientNumber)}
        />
      );
    });
  }
  checkDependants = (dependants) => {
    if (this.props.animating === true) {
      return false;
    } else if (dependants.length === 0) {
      return (
        <Label text='You do not have any dependant on your file' fontSize={15} color={mainColor} alignSelf='center' />
      );
    } else if (dependants.length === 1) {
      renderCard(dependants);
    } else if (dependants.length > 1) {
      console.log('here');
        return (
          <Carousel
            style={{height: height - 130, width}}
            autoplay={false}
            bullets
          >
            {this.renderCard(dependants)}
          </Carousel>
        );
    }
  }
  render() {
    console.log(this.props.dependants);
    return (
      <View>
        <Label text='Click on the card for more details' color={mainColor} alignSelf='center' fontSize={13} marginTop={10} />
        {this.checkDependants(this.props.dependants)}
        <Spinner animating={this.props.animating} />
      </View>
    );
  }
}

mapStateToProps = ({auth, profile}) => {
  return {
    ptno: auth.patientNumber,
    token: auth.token,
    animating: auth.animating,
    dependants: profile.dependants,
  };
};
mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getDependants,
    navigate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dependants);
