import {browserHistory} from 'react-router'
import {take, put} from 'redux-saga/effects'

import {
  LOGIN_REQUEST,
  CHANGE_FORM
} from '../actions/constants'

export function * contactFlow () {
  while (true) {
    yield take(LOGIN_REQUEST)
    yield put({type: CHANGE_FORM, newFormState: {username: '', email: '', phone: ''}})
    forwardTo('/')
  }
}

export default function * root () {
  yield [contactFlow()]
}

function forwardTo (location) {
  browserHistory.push(location)
}
