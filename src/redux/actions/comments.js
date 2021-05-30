import request from '../../api'
import {
  COMMENTS_LIST_FAIL,
  COMMENTS_LIST_REQUEST,
  COMMENTS_LIST_SUCCESS,
  CREATE_COMMENT_FAIL,
  CREATE_COMMENT_SUCCESS,
} from '../actionType'

export const getVideoCommentsById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENTS_LIST_REQUEST,
    })

    const { data } = await request('/commentThreads', {
      params: {
        part: 'snippet',
        videoId: id,
      },
    })
    dispatch({
      type: COMMENTS_LIST_SUCCESS,
      payload: data.items,
    })
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: COMMENTS_LIST_FAIL,
      payload: error.message,
    })
  }
}

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    }

    await request.post('/commentThreads', obj, {
      params: {
        part: 'snippet',
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    })
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
    })

    setTimeout(() => dispatch(getVideoCommentsById(id)), 3000)
  } catch (error) {
    dispatch({
      type: CREATE_COMMENT_FAIL,
      payload: error.message,
    })
  }
}
