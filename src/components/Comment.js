import styled from 'styled-components/macro'
import moment from 'moment'

function Comment({ comment }) {
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } =
    comment

  return (
    <Container>
      <img src={authorProfileImageUrl} alt='avatar' />
      <CommentBody>
        <p style={{ marginBottom: '7px' }}>
          {authorDisplayName} • {moment(publishedAt).fromNow()}{' '}
        </p>
        <p>{textDisplay}</p>
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
    height: 50px;
    object-fit: contain;
    margin-right: 1.2rem;
  }
`

const CommentBody = styled.div`
  max-width: 650px;
`
