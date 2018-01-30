import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'native-base'
import Container from '../components/Container/Container'

const styles = {
  arrowStyle: {
    paddingLeft: 6,
    paddingBottom: 3
  },
  container: {
    flexDirection: 'column',
    flex: 1
  },
  body: {
    flexDirection: 'column',
    flex: 2
  },
  image: {
    width: 220,
    height: 80
  }
}
class AboutDetail extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: '',
    headerLeft: (
      <Icon
        style={styles.arrowStyle}
        ios="ios-arrow-back-outline"
        android="md-arrow-back"
        onPress={() => navigation.navigate('About')}
      />
    )
  })

  render () {
    return (
      <View style={styles.container}>
        <Container green center>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('../assets/logo.png')}
          />
        </Container>
        <View style={styles.body}>
          <Text>Hello</Text>
        </View>
      </View>
    )
  }
}

export default AboutDetail
