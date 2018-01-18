import React from 'react'
import { Text } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation'
import HomeScreen from '../screens/Home'

const DrawerNav = DrawerNavigator({
  Land: { screen: HomeScreen }
})

const DrawerRoute = StackNavigator(
  {
    NextNavigation: { screen: DrawerNav }
  },
  {
    headerMode: 'float',
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: '#4C3E54' },
      title: 'Home!',
      headerTintColor: 'white',
      headerLeft: (
        <Text onPress={() => navigation.navigate('DrawerOpen')}>Menu</Text>
      )
    })
  }
)

export default DrawerRoute
