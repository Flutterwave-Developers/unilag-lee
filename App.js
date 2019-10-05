import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AuthenticationScreen from './src/screens/authentication/AuthenticationScreen.js';
import LoginScreen from './src/screens/authentication/LoginScreen.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AuthenticationScreen />
    )
  }
}