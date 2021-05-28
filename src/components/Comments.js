import styled from 'styled-components/macro'
import Comment from './Comment'

function Comments() {
  const handleComment = () => {}

  return (
    <CommentsWrap>
      <p>1234 Comments</p>
      <FormWrap>
        <img src='/images/profile.png' alt='avatar' />
        <CommentForm onSubmit={handleComment}>
          <input type='text' placeholder='Write a comment...' />
          <button>Comment</button>
        </CommentForm>
      </FormWrap>
      <CommentsList>
        {[...Array(12)].map((_, i) => (
          <Comment key={i} />
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
