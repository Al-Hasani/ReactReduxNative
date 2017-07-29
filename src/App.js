/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, addNavigationHelpers } from "react-navigation";

import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Navigator from './Navigator';

const Navigation = ({ dispatch, nav }) => {
  return (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav
    })}
  />
);
};

const mapStateToProps = state => {
  return {
    nav: state.nav
  };
};

const AppWithNavigation = connect(mapStateToProps)(Navigation);

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <AppWithNavigation />
      </Provider>
    );
  }
}
