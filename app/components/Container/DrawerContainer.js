import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'

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
  },
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingRight: 0.5,
    paddingLeft: 7,
    paddingBottom: 14,
    borderBottomWidth: 1
  },
  cellText: {
    marginLeft: 7
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
        </View>
      </View>
    )
  }
}

const ListItem = props => (
  <TouchableOpacity
    style={styles.cell}
    onPress={() => props.navigate(props.param)}
  >
    <Icon ios={props.iosIcon} android={props.androidIcon} />
    <Text style={styles.cellText}>{props.title}</Text>
  </TouchableOpacity>
)
