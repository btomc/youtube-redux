import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components/macro'
import Comments from '../components/Comments'
import VideoMetaData from '../components/VideoMetaData'
import VideoSmall from '../components/VideoSmall'
import { getVideoById } from '../redux/actions/videos'

function WatchScreen() {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoById(id))
  }, [dispatch, id])

  const { video, loading } = useSelector((state) => state.selectedVideo)

  return (
    <Row>
      <ColBig>
        <PlayerWrap>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder='0'
            title={video?.snippet?.title}
            allowFullScreen
            width='100%'
            height='100%'
          ></iframe>
        </PlayerWrap>
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h5>Loading...</h5>
        )}

        <Comments />
      </ColBig>
      <Col>
        {[...Array(10)].map((_, i) => (
          <VideoSmall key={i} />
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
