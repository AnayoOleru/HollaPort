import { createStackNavigator } from 'react-navigation';
import SignUp from '../screens/Signup';
import Profile from '../screens/ProfileScreen';

export const SignUpNavigator = createStackNavigator(
  {
    SignUp: SignUp
  }
);

export const ProfileNavigator = createStackNavigator(
    {
      Profile: Profile
    }
  );
  

