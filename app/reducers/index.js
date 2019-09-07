import {
  CHANGE_FORM,
  LOGIN_REQUEST
} from '../actions/constants'

let initialState = {
  formState: {
    username: '',
    email: '',
    phone: ''
  },
  error: '',
  contacts: []
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.contacts = [...state.contacts]
      return {...newState, formState: action.newFormState}
    }
    case LOGIN_REQUEST: {
      const newState = JSON.parse(JSON.stringify(state))
      newState.contacts = [...state.contacts]
      newState.contacts.push(action.data)
      return {...newState}
    }
    default:
      return state
  }
}

export default reducer
