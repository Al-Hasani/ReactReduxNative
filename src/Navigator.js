import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Home from './views/Home';
import Clinics from './views/Clinics';
import Login from './views/Login';
import Locations from './views/Locations';
import ContactUs from './views/ContactUs';
import OTP from './views/OTP';
import Profile from './views/Profile';
import Dependants from './views/Dependants';

export const mainColor = '#16a085'; //#bc7d37 //#CB883A
export const subColor = '#fff';

const navOptions = (title, label) => {
  return {
      title: title,
      tabBarLabel: label,
      headerStyle: {backgroundColor: '#16a085'},
      headerTitleStyle: { color: '#fff' },
      headerBackTitleStyle: { color: '#fff' },
      headerTintColor: '#fff',
      // gesturesEnabled: false,
      // headerLeft: false
  }
}

const Navigator = TabNavigator({
  Home: { screen: Home },
      Clinics: {
        screen: StackNavigator({
          Clinics: { screen: Clinics }
        }, {
          navigationOptions: navOptions('Clinics', 'Clinics')
        })
      },
  Login: {
    screen: StackNavigator({
      Login: { screen: Login },
      OTP: { screen: OTP },
      Profile: { screen: Profile },
      Dependants: { screen: Dependants }
    }, {
      navigationOptions: navOptions('Login', 'EServices')
    })
  },
  Locations: {
        screen: StackNavigator({
          Locations: { screen: Locations }
        }, {
          navigationOptions: navOptions('Locations', 'Locations')
        })
      },
      ContactUs: {
        screen: StackNavigator({
          ContactUs: { screen: ContactUs }
        }, {
          navigationOptions: navOptions('Contact Us', 'Contact Us')
        })
      }
}, {
  tabBarOptions : {
    style: {
      backgroundColor: mainColor,
      borderTopWidth: 0
    },
    labelStyle: {
      fontSize: Platform.OS === 'ios' ? 12 : 9,
      marginLeft: 0,
      marginRight: 0
    },
    inactiveTintColor: subColor,
    activeTintColor: (Platform.OS === 'ios') ? mainColor : subColor,
    activeBackgroundColor: subColor,
    indicatorStyle: {
      backgroundColor: subColor
    }
  }
});

export default Navigator;
