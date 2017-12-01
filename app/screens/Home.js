import React, { Component } from 'react'
import { Container, Content, Card, CardItem, Body, Text } from 'native-base'

export default class Home extends Component {
  render () {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Cumque, eveniet ex illum, ab laboriosam hic pariatur
                  repellendus quibusdam ullam nisi repudiandae rem, nostrum sint
                  eos. Officiis, nisi veritatis! Cupiditate minima illum, earum
                  ad rerum consequuntur voluptatem facere aliquid blanditiis
                  quae modi aliquam, sunt tenetur ipsam quos odio assumenda
                  ipsum reiciendis.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
