import React, {Component} from 'react'
import {connect} from 'react-redux'

class Home extends Component {
  render () {
    return (
      <div className='full-width'>
        <div> {
          this.props.data.contacts.map(p =>
            <div key={p.username}>
              <h4><b>{p.username}</b></h4>
              <h4><b>{p.email}</b></h4>
              <h4><b>{p.phone}</b></h4>
            </div>)
          }
        </div>
      </div>
    )
  }
}

function select (state) {
  return {
    data: state
  }
}

export default connect(select)(Home)
