import React, { Component } from 'react';
import { TouchableOpacity, Dimensions, Text } from 'react-native';
const { width, height } = Dimensions.get('window');
export default class ProfileButton extends Component {
  render() {

    const color = this.props.color !== undefined ? this.props.color : '#fff';
    const fontSize = this.props.fontSize !== undefined ? (width * 2 / height) * this.props.fontSize : (width * 2 / height) * 12;

    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <Text
          style={{ color, fontSize }}
        >
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  button: {
    flex: 1,
    padding: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#efefef'
  }
}
