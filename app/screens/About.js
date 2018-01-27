import React, { Component } from 'react'
import BigSubMenuContainer from '../components/Container/bigSubMenuContainer/BigSubMenuContainer'

const Items = [
  { name: 'Academically Excellent', Id: 1, detailScreen: 'AboutDetail' },
  { name: 'Passionately Catholic', Id: 2, detailScreen: 'AboutDetail' },
  { name: 'Our Vision and Charisms', Id: 3, detailScreen: 'AboutDetail' },
  { name: 'Our Mission4', Id: 4, detailScreen: 'AboutDetail' },
  { name: 'Strategic Planning', Id: 5, detailScreen: 'AboutDetail' },
  { name: 'History', Id: 6, detailScreen: 'AboutDetail' },
  { name: 'Franciscans TOR', Id: 7, detailScreen: 'AboutDetail' },
  { name: 'Contact Us', Id: 8, detailScreen: 'AboutDetail' }
]
class About extends Component {
  /* constructor (props) {
    super(props)
    // the state object suggestion to look like the const Item above
  } */

  static navigationOptions = ({ navigation }) => ({
    headerTitle: ''
  })

  ComponentDidMount () {
    // do a http reques to get the data to display in the component
  }

  render () {
    return (
      <BigSubMenuContainer
        imageurl={''}
        title={'About'}
        items={Items}
        navigation={this.props.navigation}
      />
    )
  }
}

export default About
