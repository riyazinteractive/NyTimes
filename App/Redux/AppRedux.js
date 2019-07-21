import { createReducer, createActions } from 'reduxsauce'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startLoading: null,
  stopLoading: null,
  getData: ['days'],
  setError: ['error'],
  resetError: null,
  saveData: ['data'],
  setNews: ['news']
})

export const AppTypes = Types
export default Creators

export const INITIAL_STATE = {
  loading: false,
  data: null,
  news: null,
  error: ''
}

/* ------------- Reducers ------------- */

export const startLoading = state => {
  return { ...state, loading: true }
}

export const stopLoading = state => {
  return { ...state, loading: false }
}

export const saveData = (state, { data }) => {
  return { ...state, data }
}

export const setError = (state, { error }) => {
  return { ...state, error }
}

export const resetError = state => {
  return { ...state, error: '' }
}

export const setNews = (state, { news }) => {
  return { ...state, news }
}
/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.START_LOADING]: startLoading,
  [Types.STOP_LOADING]: stopLoading,
  [Types.SAVE_DATA]: saveData,
  [Types.SET_ERROR]: setError,
  [Types.RESET_ERROR]: resetError,
  [Types.SET_NEWS]: setNews
})
