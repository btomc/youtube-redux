import styled from 'styled-components/macro'
import Comments from '../components/Comments'
import VideoMetaData from '../components/VideoMetaData'
import VideoSmall from '../components/VideoSmall'

function WatchScreen() {
  return (
    <Row>
      <ColBig>
        <PlayerWrap>
          <iframe
            src='https://www.youtube.com/embed/tgbNymZ7vqY'
            frameBorder='0'
            title='My Video'
            allowFullScreen
            width='100%'
            height='100%'
          ></iframe>
        </PlayerWrap>

        <VideoMetaData />
        <Comments />
      </ColBig>
      <Col>
        {[...Array(10)].map(() => (
          <VideoSmall />
        ))}
      </Col>
    </Row>
  )
}

export default WatchScreen

const Row = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1rem;
`
const ColBig = styled.div`
  flex: 0.65;
  /* width: 100%; */
`
const Col = styled.div`
  flex: 0.3;
`
const PlayerWrap = styled.div`
  height: 60vh;
  background: #353946;
  width: 100%;
  margin-bottom: 1rem;
`
