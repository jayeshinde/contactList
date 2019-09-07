import 'babel-polyfill'

import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import {createLogger} from 'redux-logger'
import reducer from './reducers'
import rootSaga from './sagas'

import './styles/main.css'

import App from './components/App'
import Home from './components/Home'
import NotFound from './components/NotFound'
import NewUser from './components/NewUser'

const logger = createLogger({
  // Ignore `CHANGE_FORM` actions in the logger, since they fire after every keystroke
  predicate: (action) => action.type !== 'CHANGE_FORM'
})

const sagaMiddleware = createSagaMiddleware()

// Creates the Redux store using our reducer and the logger and saga middlewares
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
// We run the root saga automatically
sagaMiddleware.run(rootSaga)

class ContactLists extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route component={App}>
            <Route path='/' component={Home} />
            <Route>
              <Route path='/new-user' component={NewUser} />
              <Route path='/home' component={Home} />
            </Route>
            <Route path='*' component={NotFound} />
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<ContactLists />, document.getElementById('app'))
