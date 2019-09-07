import React, {Component} from 'react'
import {connect} from 'react-redux'
import Form from './common/Form'

import {addContactRequest} from '../actions'

class NewUser extends Component {
  constructor (props) {
    super(props)
    this._newUser = this._newUser.bind(this)
  }

  render () {
    const {dispatch} = this.props
    const {formState, error} = this.props.data

    return (
      <div className='form-page__wrapper'>
        <div className='form-page__form-wrapper'>
          <div className='form-page__form-header'>
            <h2 className='form-page__form-heading'>New Contact</h2>
          </div>
          <Form data={formState}
            dispatch={dispatch}
            history={this.props.history}
            onSubmit={this._newUser}
            btnText={'Submit'}
            error={error}
          />
        </div>
      </div>
    )
  }

  _newUser (username, email, phone) {
    this.props.dispatch(addContactRequest({username, email, phone}))
  }
}

NewUser.propTypes = {
  data: React.PropTypes.object,
  history: React.PropTypes.object,
  dispatch: React.PropTypes.func
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(NewUser)
