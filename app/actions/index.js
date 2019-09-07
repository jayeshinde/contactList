import {
  CHANGE_FORM,
  LOGIN_REQUEST,
  CLEAR_ERROR
} from './constants'

export function changeForm (newFormState) {
  return {type: CHANGE_FORM, newFormState}
}

export function addContactRequest (data) {
  return {type: LOGIN_REQUEST, data}
}

export function clearError () {
  return {type: CLEAR_ERROR}
}
