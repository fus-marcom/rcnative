import React, { Component } from 'react'
import { View, Image, ScrollView } from 'react-native'
import Container from '../components/Container/Container'
import FlatBanner from '../components/FlatBanner'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
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
})

const Names = [
  { name: 'Academically Excellent', subtitle: 'sub name 1' },
  { name: 'Passionately Catholic', subtitle: 'sub name 2' },
  { name: 'Our Vision and Charisms', subtitle: 'sub name 3' },
  { name: 'Our Mission4', subtitle: 'sub name 4' },
  { name: 'Strategic Planning', subtitle: 'sub name 5' },
  { name: 'History', subtitle: 'sub name 6' },
  { name: 'Franciscans TOR', subtitle: 'sub name 7' },
  { name: 'Contact Us', subtitle: 'sub name 8' }
]
export default class About extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'About'
  })

  render () {
    console.log(this.props)
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
          <ScrollView>
            {Names.map((item, index) => (
              <FlatBanner
                navigation={this.props.navigation.navigate}
                key={index}
                title={item.name}
                subtitle={item.subtitle}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    )
  }
}
