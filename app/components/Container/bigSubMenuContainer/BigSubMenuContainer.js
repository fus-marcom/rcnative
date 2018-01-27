import React from 'react'
import { View, ScrollView, Text, ImageBackground } from 'react-native'
import UpperLetterCard from '../../cards/upperLetterCard/UpperLetterCard'
import styles from './styles'

const BigSubMenuContainer = props => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require('../../../assets/Sts-Cosmas-and-Damian-hero.jpg')}
      >
        <View style={styles.innerView}>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </ImageBackground>
      <View style={styles.body}>
        <ScrollView>
          {props.items.map((item, index) => (
            <UpperLetterCard
              funcCallBack={props.navigation}
              likn={''}
              key={index}
              title={item.name}
              detailScreen={item.detailScreen}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

export default BigSubMenuContainer