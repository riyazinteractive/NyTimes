import { put, call } from 'redux-saga/effects'
import AppAction from '../Redux/AppRedux'

export function * getData (api, action) {
  const { days } = action
  yield put(AppAction.startLoading())
  yield put(AppAction.resetError())
  const response = yield call(api.getData, days)
  yield put(AppAction.stopLoading())
  if (response.ok) {
    console.log(response.data)
    yield put(AppAction.saveData(response.data))
  } else {
    // Error handling
    console.log('Error::', response)
    const str =
      'Due to Technical issue cannot process now. Please try again later.'
    yield put(AppAction.setError(str))
  }
}
