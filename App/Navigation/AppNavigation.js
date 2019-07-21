import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import HomeScreen from '../Screens/Home/HomeScreen'
import ProfileScreen from '../Screens/Profile/ProfileScreen'
import NewsScreen from '../Screens/NewsPage/NewsScreen'

import { transitionRight } from './NavTransition'

const DrawerNav = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        drawerLabel: 'Home'
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        drawerLabel: 'Profile'
      }
    }
  },
  {
    drawerBackgroundColor: '#47e4c2',
    contentOptions: {
      activeTintColor: 'black',
      activeBackgroundColor: '#7DB9B9'
    }
  }
)

const AppNavigation = createStackNavigator(
  {
    Home: { screen: DrawerNav },
    News: { screen: NewsScreen }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    transitionConfig: transitionRight
  }
)

export default createAppContainer(AppNavigation)
