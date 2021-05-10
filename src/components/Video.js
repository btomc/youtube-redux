import styled from 'styled-components/macro'
import { AiFillEye } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import request from '../api'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'

function Video({ video }) {
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const formattedDuration = moment.utc(seconds * 1000).format('mm:ss')

  const _videoId = id?.videoId || id

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get('/videos', {
        params: {
          part: 'contentDetails, statistics',
          id: _videoId,
        },
      })
      // console.log(items)
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    getVideoDetails()
  }, [_videoId])

  useEffect(() => {
    const getChannelIcon = async () => {
      const {
        data: { items },
      } = await request.get('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      })
      // console.log(items)
      setChannelIcon(items[0].snippet.thumbnails.default)
    }
    getChannelIcon()
  }, [channelId])

  return (
    <Container>
      <VideoTop>
        {/* <img src={medium.url} alt='video-pic' /> */}
        <LazyLoadImage src={medium.url} effect='blur' />
        <span>{formattedDuration}</span>
      </VideoTop>
      <VideoTitle>{title}</VideoTitle>
      <VideoDetails>
        <span>
          <AiFillEye style={{ marginBottom: '-2px' }} />{' '}
          {numeral(views).format('0.a')} Views •
        </span>
        <span style={{ marginLeft: '2px' }}>
          {' '}
          {moment(publishedAt).fromNow()}
        </span>
      </VideoDetails>
      <VideoChannel>
        {/* <img src={channelIcon?.url} alt='profile' /> */}
        <LazyLoadImage src={channelIcon?.url} effect='blur' />
        <p>{channelTitle}</p>
      </VideoChannel>
    </Container>
  )
}

export default Video

const Container = styled.div`
  margin-bottom: 1rem;
  padding: 0.7rem;
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
`

const VideoTop = styled.div`
  margin-bottom: 0.5rem;
  position: relative;

  img {
    width: 100%;
  }

  span {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    padding: 0.2rem;
    background: #080808ec;
    border-radius: 3px;
  }
`

const VideoTitle = styled.div`
  margin-bottom: 0.1rem;
  color: #fff;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`

const VideoDetails = styled.div`
  display: flex;
  align-items: center;
`

const VideoChannel = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  p {
    margin-bottom: 0;
  }
`
