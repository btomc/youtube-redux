import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getVideosBySearch } from '../redux/actions/videos'
import styled from 'styled-components/macro'
import VideoSmall from '../components/VideoSmall'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

function SearchScreen() {
  const { query } = useParams()
  //   console.log(query)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getVideosBySearch(query))
  }, [dispatch, query])

  const { videos, loading } = useSelector((state) => state.searchedVideos)

  return (
    <Container>
      {!loading ? (
        videos?.map((video) => (
          <VideoSmall video={video} key={video.id.videoId} searchScreen />
        ))
      ) : (
        <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
          <Skeleton width='100%' height='160px' count={20} />
        </SkeletonTheme>
      )}
    </Container>
  )
}

export default SearchScreen

const Container = styled.div``
