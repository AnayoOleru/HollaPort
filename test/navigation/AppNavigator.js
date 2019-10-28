import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { SignUpNavigator, ProfileNavigator} from './StackNavigator'

export default createAppContainer(
  createSwitchNavigator({
    SignUp: SignUpNavigator,
    Main: ProfileNavigator,
  },
  {
    initialRouteName: 'SignUp'
  })
);
