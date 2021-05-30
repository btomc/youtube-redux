import {
  COMMENTS_LIST_FAIL,
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
} from '../actionType'

export const commentsListReducer = (
  state = { loading: true, comments: null },
  action
) => {
  const { payload, type } = action

  switch (type) {
    case COMMENTS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case COMMENTS_LIST_SUCCESS:
      return {
        ...state,
        comments: payload,
        loading: false,
      }
    case COMMENTS_LIST_FAIL:
      return {
        ...state,
        comments: null,
        loading: false,
        error: payload,
      }
    default:
      return state
  }
}
