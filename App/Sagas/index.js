import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { AppTypes } from '../Redux/AppRedux'
/* ------------- Sagas ------------- */

import { getData } from './AppSaga'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([takeLatest(AppTypes.GET_DATA, getData, api)])
}
