import React from 'react'
import { Platform } from 'react-native'
import { Constants } from 'expo'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import HomeScreen from '../screens/Home'
import About from '../screens/About'
import DrawerContainer from '../components/Container/DrawerContainer'
import EStyleSheet from 'react-native-extended-stylesheet'
import AboutDetail from '../screens/AboutDetail'
import LetterHead from '../screens/LetterHead'

const styles = EStyleSheet.create({
  header: {
    backgroundColor: '$primary',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
  },
  hamburgerIcon: {
    color: 'white',
    paddingLeft: 10
  }
})

const DrawerNav = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    About: {
      screen: About
    }
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  }
)

// I use this to define the global header of all screen how use DrawerNavigator that is above
const DrawerRoute = StackNavigator(
  {
    NextNavigation: { screen: DrawerNav },
    AboutDetail: { screen: AboutDetail },
    LetterHead: { screen: LetterHead }
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: styles.header,
      title: 'Home',
      headerTintColor: 'white',
      headerLeft: (
        <Icon
          style={styles.hamburgerIcon}
          ios="ios-menu"
          android="md-menu"
          onPress={() => navigation.navigate('DrawerToggle')}
        />
      ),
      gesturesEnabled: false
    })
  }
)

export default DrawerRoute
