import React, { Component } from 'react'
import { View, TouchableWithoutFeedback, Text, Animated } from 'react-native'
import { Icon } from 'native-base'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  containerGroup: {
    flexDirection: 'column'
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 14,
    paddingRight: 0.5,
    paddingLeft: 7,
    paddingBottom: 14
  },
  /* childContainer: {
      paddingLeft: 7,

    }, */
  cellText: {
    marginLeft: 11
  }
})

export default class ListGroup extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      fadeAnim: new Animated.Value(0)
    }
  }

  openTreeList = () => {
    this.setState(prevState => ({ ...this.state, isOpen: !prevState.isOpen }))

    Animated.timing(
      // Animate over time
      this.state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 10000 // Make it take a while
      }
    ).start()
  }

  componentWillUnmount () {
    this.setState(prevState => ({ ...this.state, isOpen: false }))
  }

  render () {
    let { fadeAnim } = this.state.fadeAnim
    return (
      <TouchableWithoutFeedback
        style={styles.containerGroup}
        onPress={() => this.openTreeList()}
      >
        <View>
          <View style={styles.titleContainer}>
            <Icon
              ios={this.props.iosIcon}
              android={this.props.androidIcon}
              style={{ fontSize: 15 }}
            />
            <Text style={styles.cellText}>{this.props.title}</Text>
          </View>
          {this.state.isOpen ? (
            <Animated.View style={{ marginLeft: 10, opacity: fadeAnim }}>
              {this.props.children}
            </Animated.View>
          ) : null}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
