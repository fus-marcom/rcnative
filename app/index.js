import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Router from './config/Router'

EStyleSheet.build({
  $primary: '#21412a',
  $yellow: '#ffb41f'
})

const Index = () => <Router />

export default Index
