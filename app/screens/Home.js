import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
// import { Container, Content, Card, CardItem, Body, Text } from 'native-base'
import genericCardData from '../data/genericCardData'
import GenericCard from '../components/cards/genericCard/GenericCard'

export default class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home'
  })

  onClickGenericCard () {}

  onClickToNavigate (link, navigate, props) {
    console.log(props)
    navigate(link, props)
  }

  render () {
    return (
      <View>
        <ScrollView>
          <View>
            {genericCardData.map((item, index) => {
              return (
                <GenericCard
                  funcCallBack={this.onClickToNavigate}
                  navigate={this.props.navigation.navigate}
                  key={index}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                />
              )
            })}
          </View>
        </ScrollView>
      </View>
    )
  }
}
