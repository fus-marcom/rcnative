import React from 'react';
import Container from '../components/Container';
import { Text, Image } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  image: {
    width: 220,
    height: 80
  }
});

class Splash extends React.Component {
  render() {
    return (
      <Container green center>
        <Image
          resizeMode="stretch"
          style={styles.image}
          source={require('../assets/logo.png')}
        />
      </Container>
    );
  }
}

export default Splash;
