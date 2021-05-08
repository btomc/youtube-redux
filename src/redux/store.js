import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { authReducer } from './reducers/auth'

const initialState = {}

const reducer = combineReducers({
    auth: authReducer,
})

const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store