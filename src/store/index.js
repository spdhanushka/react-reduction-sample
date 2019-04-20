import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import { logger } from 'redux-logger'


let middleware = applyMiddleware(thunk);
if (process.env.NODE_ENV !== 'production') {
  middleware = applyMiddleware(thunk, logger)
}

const store = createStore(
  rootReducer,
  middleware
)

export default store;