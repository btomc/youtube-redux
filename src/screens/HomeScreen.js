import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CategoriesBar from '../components/CategoriesBar'
import Video from '../components/Video'
import { getPopularVideos, getVideosByCategory } from '../redux/actions/videos'
import InfiniteScroll from 'react-infinite-scroll-component'

function HomeScreen() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  const { videos, activeCategory } = useSelector((state) => state.homeVideos)

  const fetchData = () => {
    if (activeCategory === 'All') dispatch(getPopularVideos())
    else {
      dispatch(getVideosByCategory(activeCategory))
    }
  }

  return (
    <Container>
      <CategoriesBar />
      <Row>
        <InfiniteScroll
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={true}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {videos.map((video) => (
            <Col key={video.id}>
              <Video video={video} />
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
    </Container>
  )
}

export default HomeScreen

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

const Row = styled.div`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  gap: 10px;
  /* width: 100%; */

  @media (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
  }
`

const Col = styled.div`
  /* max-width: 320px; */
`
