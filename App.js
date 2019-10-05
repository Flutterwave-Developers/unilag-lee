import React, { Component } from 'react';
import { View, Text } from 'react-native';

import AuthenticationScreen from './src/screens/authentication/AuthenticationScreen.js';
import LoginScreen from './src/screens/authentication/LoginScreen.js';
import SignupScreen from './src/screens/authentication/SignupScreen.js';
import FundWalletScreen from './src/screens/wallet/FundWalletScreen.js';
import WalletScreen from './src/screens/wallet/WalletScreen.js';
import HomeScreen from './src/screens/wallet/HomeScreen.js';
import HospitalScreen from './src/screens/wallet/HospitalScreen.js';
import ProfileScreen from './src/screens/wallet/ProfileScreen.js';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

const AuthNavigator = createStackNavigator({
  Signup: SignupScreen,
  Login: LoginScreen,
}, {
  initialRouteName: 'Signup', 
  headerMode: 'none'
})

const WalletNavigator = createStackNavigator({
  WalletS: WalletScreen,
  FundWallet: FundWalletScreen
}, {
  initialRouteName: 'WalletS',
  headerMode: 'none'
})

const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  HMO: HospitalScreen,
  Wallet: WalletNavigator,
  Profile: ProfileScreen,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-home'
        } else if (routeName === 'HMO') {
          iconName = 'ios-heart'
        } else if (routeName === 'Wallet') {
          iconName = 'ios-briefcase'
        } else if (routeName === 'Profile') {
          iconName = 'ios-person'
        }

        return <IconComponent name={iconName} size={25} color={tintColor} />;

      }
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: '#D8E4FC90',
      style: { backgroundColor: '#4242DB' }
    },
    initialRouteName: 'Home',
    headerMode: 'none'
  })

const RootNavigator = createSwitchNavigator({
  Authentication: AuthenticationScreen,
  Auth: AuthNavigator,
  App: AppNavigator
})

export default createAppContainer(RootNavigator);

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       // <SignupScreen />
//       // <AuthenticationScreen />
//       // <LoginScreen />
//       // <FundWalletScreen />
//       <HomeScreen />
//     )
//   }
// }