import React, {Component} from 'react'
import ErrorMessage from './ErrorMessage'
import LoadingButton from './LoadingButton'
import {changeForm} from '../../actions'

class Form extends Component {
  constructor (props) {
    super(props)
    this._onSubmit = this._onSubmit.bind(this)
    this._changeUsername = this._changeUsername.bind(this)
    this._changeEmail = this._changeEmail.bind(this)
    this._changePhone = this._changePhone.bind(this)
  }

  render () {
    const {error} = this.props

    return (
      <form className='form' onSubmit={this._onSubmit}>
        {error ? <ErrorMessage error={error} /> : null}
        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            type='text'
            id='username'
            required='true'
            value={this.props.data.username}
            placeholder=''
            onChange={this._changeUsername}
            autoCorrect='off'
            autoCapitalize='off'
            spellCheck='false'
          />
          <label className='form__field-label' htmlFor='username'>
            Username
          </label>
        </div>
        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            id='email'
            type='text'
            required='true'
            value={this.props.data.email}
            placeholder=''
            onChange={this._changeEmail}
          />
          <label className='form__field-label' htmlFor='email'>
            Email
          </label>
        </div>
        <div className='form__field-wrapper'>
          <input
            className='form__field-input'
            id='phone'
            type='text'
            value={this.props.data.phone}
            placeholder=''
            onChange={this._changePhone}
          />
          <label className='form__field-label' htmlFor='phone'>
            Phone
          </label>
        </div>
        <div className='form__submit-btn-wrapper'>
          {this.props.currentlySending
            ? <LoadingButton />
            : <button className='form__submit-btn' type='submit'>
              {this.props.btnText}
            </button>}
        </div>
      </form>
    )
  }

  _changeUsername (event) {
    this._emitChange({...this.props.data, username: event.target.value})
  }

  _changeEmail (event) {
    this._emitChange({...this.props.data, email: event.target.value})
  }

  _changePhone (event) {
    this._emitChange({...this.props.data, phone: event.target.value})
  }

  _emitChange (newFormState) {
    this.props.dispatch(changeForm(newFormState))
  }

  _onSubmit (event) {
    event.preventDefault()
    this.props.onSubmit(this.props.data.username, this.props.data.email, this.props.data.phone)
  }
}

Form.propTypes = {
  dispatch: React.PropTypes.func,
  data: React.PropTypes.object,
  onSubmit: React.PropTypes.func,
  changeForm: React.PropTypes.func,
  btnText: React.PropTypes.string,
  error: React.PropTypes.string
}

export default Form
