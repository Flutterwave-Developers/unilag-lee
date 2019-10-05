import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AuthenticationScreen from './src/screens/authentication/AuthenticationScreen.js';
import LoginScreen from './src/screens/authentication/LoginScreen.js';
import SignupScreen from './src/screens/authentication/SignupScreen.js';
import FundWalletScreen from './src/screens/wallet/FundWalletScreen.js';
import HomeScreen from './src/screens/wallet/HomeScreen.js';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // <SignupScreen />
      // <AuthenticationScreen />
      // <LoginScreen />
      // <FundWalletScreen />
      <HomeScreen />
    )
  }
}