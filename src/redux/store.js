import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth'
import { homeVideosReducer } from './reducers/videos'

const initialState = {}

const reducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
