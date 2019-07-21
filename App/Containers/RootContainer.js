import React, { Component } from 'react'
import { SafeAreaView, StatusBar, Platform } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'

class RootContainer extends Component {
  render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        />
        <AppNavigation />
      </SafeAreaView>
    )
  }
}

export default RootContainer
