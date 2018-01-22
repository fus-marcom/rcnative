import React, { Component } from 'react'
import { View, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
import ListGroup from '../ListGroup'
import ListItem from '../ListItem'

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  topSection: {
    flex: 1,
    backgroundColor: '$primary',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomSection: {
    flex: 2,
    backgroundColor: 'white'
  },
  image: {
    width: 220,
    height: 80
  }
})

export default class DrawerContainer extends Component {
  render () {
    const { navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Image
            resizeMode="stretch"
            style={styles.image}
            source={require('../../assets/logo.png')}
          />
        </View>
        <View style={styles.bottomSection}>
          <ListItem
            navigate={navigation.navigate}
            param={'Home'}
            iosIcon={'ios-home'}
            androidIcon={'md-home'}
            title={'Home'}
          />
          <ListItem
            navigate={navigation.navigate}
            param={'About'}
            iosIcon={'ios-school'}
            androidIcon={'md-school'}
            title={'About'}
          />
          <ListGroup
            iosIcon={'ios-school'}
            androidIcon={'md-school'}
            title={'Facultaty'}
          >
            <ListItem
              navigate={navigation.navigate}
              param={'About'}
              iosIcon={'ios-school'}
              androidIcon={'md-school'}
              title={'Test Group'}
            />
            <ListItem
              navigate={navigation.navigate}
              param={'About'}
              iosIcon={'ios-school'}
              androidIcon={'md-school'}
              title={'P2'}
            />
          </ListGroup>
        </View>
      </View>
    )
  }
}
