import React from 'react'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import { Icon } from 'native-base'
import HomeScreen from '../screens/Home'
import About from '../screens/About'
import DrawerContainer from '../components/Container/DrawerContainer'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  header: {
    backgroundColor: '$primary',
    justifyContent: 'center'
  },
  hambergueMenu: {
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
    NextNavigation: { screen: DrawerNav }
  },
  {
    headerMode: 'float',
    gesturesEnabled: false,
    navigationOptions: ({ navigation }) => ({
      headerStyle: styles.header,
      title: 'Home',
      headerTintColor: 'white',
      headerLeft: (
        <Icon
          style={styles.hambergueMenu}
          ios="ios-menu"
          android="md-menu"
          onPress={() => navigation.navigate('DrawerToggle')}
        />
      )
    })
  }
)

export default DrawerRoute
