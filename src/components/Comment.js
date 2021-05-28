import styled from 'styled-components/macro'
import moment from 'moment'

function Comment() {
  return (
    <Container>
      <img src='/images/profile.png' alt='avatar' />
      <CommentBody>
        <p style={{ marginBottom: '7px' }}>
          Josh Petters • {moment('2021-05-25').fromNow()}{' '}
        </p>
        <p>Nice video bro!</p>
      </CommentBody>
    </Container>
  )
}

export default Comment

const Container = styled.div`
  padding: 0.9rem;
  display: flex;
  font-size: 0.9rem;
  border-bottom: 2px solid #353946;

  img {
    border-radius: 50%;
    width: 50px;
    object-fit: contain;
    margin-right: 1.2rem;
  }
`

const CommentBody = styled.div``
