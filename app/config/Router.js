import { StackNavigator } from 'react-navigation'
// import { Constants } from 'expo'
import SplashScreen from '../screens/Splash'
import DrawerRoute from './DrawerRoute'

const FirstNav = StackNavigator(
  {
    Home: {
      screen: SplashScreen
    },
    Drawer: {
      screen: DrawerRoute
    }
  },
  // default config for all screen
  {
    headerMode: 'none',
    initialRouteName: 'Home'
  }
)

export default FirstNav
