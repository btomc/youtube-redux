import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import CategoriesBar from '../components/CategoriesBar'
import Video from '../components/Video'
import { getPopularVideos } from '../redux/actions/videos'

function HomeScreen() {
  const dispatch = useDispatch()

  const { videos } = useSelector((state) => state.homeVideos)

  useEffect(() => {
    dispatch(getPopularVideos())
  }, [dispatch])

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col key={video.id}>
            <Video video={video} />
          </Col>
        ))}
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
  grid-template-columns: repeat(4, 1fr);
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
