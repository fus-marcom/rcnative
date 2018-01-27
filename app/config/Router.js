import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'
// import { Constants } from 'expo'
// import SplashScreen from '../screens/Splash'
import DrawerRoute from './DrawerRoute'
import Home from '../screens/Home'

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const Router = StackNavigator(
  {
    Home: {
      screen: Home
    },
    Drawer: {
      screen: DrawerRoute
    }
  },
  // default config for all screen wich use StackNavigator
  {
    headerMode: 'none',
    initialRouteName: 'Home',
    transitionConfig: noTransitionConfig
  }
)

export default Router
