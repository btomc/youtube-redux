import { useEffect } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components/macro'
import Comments from '../components/Comments'
import VideoMetaData from '../components/VideoMetaData'
import VideoSmall from '../components/VideoSmall'
import { getRelatedVideos, getVideoById } from '../redux/actions/videos'

function WatchScreen() {
  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideoById(id))

    dispatch(getRelatedVideos(id))
  }, [dispatch, id])

  const { video, loading } = useSelector((state) => state.selectedVideo)

  const { videos, loading: relatedVideosLoading } = useSelector(
    (state) => state.relatedVideos
  )

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

        <Comments
          videoId={id}
          totalComments={video?.statistics?.commentCount}
        />
      </ColBig>
      <Col>
        {!loading ? (
          videos
            ?.filter((video) => video.snippet)
            .map((video) => (
              <VideoSmall
                key={video.id.videoId}
                video={video}
                style={{ width: '25%' }}
              />
            ))
        ) : (
          <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
            <Skeleton width='100%' height='130px' count={15} />
          </SkeletonTheme>
        )}
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
  max-width: 650px;
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
