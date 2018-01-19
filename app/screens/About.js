import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Body, Text } from 'native-base'

export default class About extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'About'
  })
  render () {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Cumque, eveni Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. et ex illum, ab laboriosam hic pariatur
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
