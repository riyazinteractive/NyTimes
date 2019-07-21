import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  app: require('./AppRedux').reducer
})

const appReducer = (state, action) => {
  // console.log('Root Reducers', state, action)
  return reducers(state, action)
}

export default () => {
  const finalReducers = appReducer

  let { store } = configureStore(
    finalReducers,
    rootSaga
  )
  return store
}
