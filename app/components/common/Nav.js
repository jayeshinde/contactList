import React, {Component} from 'react'
import {Link} from 'react-router'
import {clearError} from '../../actions'

class Nav extends Component {
  constructor (props) {
    super(props)
    this._clearError = this._clearError.bind(this)
  }

  render () {
    const navButtons =
      <div>
        <Link to='/new-user' className='btn btn--login btn--nav' onClick={this._clearError}>
        New Contact
        </Link>
      </div>
    return (
      <div className='nav'>
        <div className='nav__wrapper'>
          <Link to='/' className='nav__logo-wrapper' onClick={this._clearError}>
            <h1 className='nav__logo'>Contact List</h1>
          </Link>
          {navButtons}
        </div>
      </div>
    )
  }

  _clearError () {
    this.props.dispatch(clearError())
  }
}

Nav.propTypes = {
  dispatch: React.PropTypes.func
}

export default Nav
