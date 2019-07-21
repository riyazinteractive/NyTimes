import '../Config'
import React, { Component } from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as StoreProvider } from 'react-redux'
import RootContainer from './RootContainer'

import createStore from '../Redux'

// create our store
const store = createStore()

class App extends Component {
  render () {
    return (
      <StoreProvider store={store}>
        <PaperProvider>
          <RootContainer />
        </PaperProvider>
      </StoreProvider>
    )
  }
}

export default App
