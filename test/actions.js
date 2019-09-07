import test from 'ava'
import {actionTest} from 'redux-ava'
import {
  changeForm,
  addContactRequest
} from '../app/actions'

const formState = {
  username: 'Luke Skywalker',
  email: 'fake@gmail.com',
  phone: '9746483020'
}

test('changeForm action',
  actionTest(changeForm, formState, {type: 'CHANGE_FORM', newFormState: formState}))

test('addContact action',
  actionTest(addContactRequest, formState, {type: 'LOGIN_REQUEST', data: formState}))
