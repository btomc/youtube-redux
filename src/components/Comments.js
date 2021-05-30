import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/macro'
import { addComment, getVideoCommentsById } from '../redux/actions/comments'
import Comment from './Comment'

function Comments({ videoId, totalComments }) {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoCommentsById(videoId))
  }, [dispatch, videoId])

  const comments = useSelector((state) => state.commentsList.comments)

  const _comments = comments?.map(
    (comment) => comment.snippet.topLevelComment.snippet
  )

  const handleComment = (e) => {
    e.preventDefault()
    if (text.length === 0) return

    dispatch(addComment(videoId, text))

    setText('')
  }

  return (
    <CommentsWrap>
      <p>{totalComments} Comments</p>
      <FormWrap>
        <img src='/images/profile.png' alt='avatar' />
        <CommentForm onSubmit={handleComment}>
          <input
            type='text'
            placeholder='Write a comment...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Comment</button>
        </CommentForm>
      </FormWrap>
      <CommentsList>
        {_comments?.map((comment, i) => (
          <Comment key={i} comment={comment} />
        ))}
      </CommentsList>
    </CommentsWrap>
  )
}

export default Comments

const CommentsWrap = styled.div``

const FormWrap = styled.div`
  display: flex;
  width: 100%;
  margin: 1rem 0;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: contain;
    margin-right: 1.2rem;
  }
`

const CommentForm = styled.form`
  display: flex;
  flex-grow: 1;

  input {
    flex-grow: 1;
    background: transparent;
    border: none;
    border-bottom: 2px solid #353946;
    color: #fff;
    &:focus {
      outline: none;
    }
  }

  button {
    border: 0;
    padding: 1rem;
    background: #353946;
    color: #fff;
    letter-spacing: 0.3px;
    border-radius: 2px;
    border-bottom-left-radius: 0;

    &:focus {
      border: none;
      outline: none;
    }
  }
`

const CommentsList = styled.div``
