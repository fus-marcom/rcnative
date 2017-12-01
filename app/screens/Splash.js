import React from 'react'
import Container from '../components/Container'
import { Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import { setTimeout } from 'core-js/library/web/timers'

const styles = EStyleSheet.create({
  image: {
    width: 220,
    height: 80
  }
})

class Splash extends React.Component {
  componentDidMount () {
    setTimeout(() => this.props.navigation.navigate('Land'), 3000)
  }

  render () {
    return (
      <Container green center>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require('../assets/logo.png')}
        />
      </Container>
    )
  }
}

export default Splash
