import React, { Component } from 'react'
import { View, Image } from 'react-native'
/* import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Icon
} from 'native-base' */
import Container from '../components/Container/Container'
import FlatBanner from '../components/FlatBanner'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.creta({
  container: {
    flexDiretion: 'column'
  },
  body: {
    flexDirection: 'row',
    flex: 2
  }
})

const Names = ['Name1', 'Name2', 'Name3']
export default class About extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'About'
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
          {Names.map((item, index) => <FlatBanner key={index} title={item} />)}
        </View>
      </View>
    )
  }
}
