import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'
// import Container from './Container/Container'

const styles = EStyleSheet.create({
  containerInner: {
    flexDirection: 'row',
    flex: 2,
    paddingBottom: 4,
    paddingTop: 2,
    paddingLeft: 2,
    paddingRight: 2,
    marginTop: 2,
    marginBottom: 0,
    marginLeft: 4,
    marginRight: 4,
    elevation: 10
  },
  capLetter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
    width: 40,
    height: 50
  },
  capFont: {
    fontSize: 30
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 50,
    paddingLeft: 3.3
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },
  subTitle: {
    fontSize: 11,
    color: '#D3D3D3',
    fontWeight: '300'
  }
})

const capSplitFirstLetter = title => {
  if (title !== ' ' && title.length >= 1) {
    let letter = title.substring(0, 1).toUpperCase()
    return letter
  }
  // return a empty string if the parametros is empty
  return ' '
}

class FlatBanner extends Component {
  render () {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigation('AboutDetail')}
      >
        <View
          style={styles.containerInner}
          shadowOffset={{ width: 2, height: 3 }}
          shadowColor={'black'}
          shadowOpacity={1}
        >
          <View style={styles.capLetter}>
            <Text style={styles.capFont}>
              {capSplitFirstLetter(this.props.title)}
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}>
              {this.props.title.substring(1, this.props.title.length)}
            </Text>
            <Text style={styles.subTitle}>{this.props.subtitle}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default FlatBanner
