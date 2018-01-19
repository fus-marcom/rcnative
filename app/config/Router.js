import { StackNavigator } from 'react-navigation'
// import { Constants } from 'expo'
import SplashScreen from '../screens/Splash'
import DrawerRoute from './DrawerRoute'

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
    initialRouteName: 'Home'
  }
)

export default Router
