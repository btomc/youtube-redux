import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/authReducer'
import {
  homeVideosReducer,
  selectedVideoReducer,
  relatedVideosReducer,
  searchedVideosReducer,
} from './reducers/videosReducer'
import { channelDetailsReducer } from './reducers/channelReducer'
import { commentsListReducer } from './reducers/commentsReducer'

const initialState = {}

const reducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo: selectedVideoReducer,
  channelDetails: channelDetailsReducer,
  commentsList: commentsListReducer,
  relatedVideos: relatedVideosReducer,
  searchedVideos: searchedVideosReducer,
})

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
