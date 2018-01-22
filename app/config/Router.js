import { Animated, Easing } from 'react-native'
import { StackNavigator } from 'react-navigation'
// import { Constants } from 'expo'
import SplashScreen from '../screens/Splash'
import DrawerRoute from './DrawerRoute'

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
      screen: SplashScreen
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
