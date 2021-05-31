import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components/macro'
import { AiFillEye } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import request from '../api'
import { useHistory } from 'react-router'

function VideoSmall({ video, searchScreen }) {
  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const history = useHistory()

  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      description,
      title,
      publishedAt,
      thumbnails: { medium },
    },
  } = video

  const isVideo = id.kind === 'youtube#video'

  const seconds = moment.duration(duration).asSeconds()
  const formattedDuration = moment.utc(seconds * 1000).format('mm:ss')

  useEffect(() => {
    const getVideoDetails = async () => {
      const {
        data: { items },
      } = await request.get('/videos', {
        params: {
          part: 'contentDetails, statistics',
          id: id.videoId,
        },
      })
      // console.log(items)
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    getVideoDetails()
  }, [id])

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

  const handleClick = () => {
    isVideo
      ? history.push(`/watch/${id.videoId}`)
      : history.push(`/channel/${id.channelId}`)
  }

  // const thumbnail = !isVideo && 'video'

  return (
    <Row onClick={handleClick}>
      <VideoSmallLeft>
        <LazyLoadImage src={medium.url} effect='blur' />
        {isVideo && <VideoDuration>{formattedDuration}</VideoDuration>}
      </VideoSmallLeft>
      <VideoSmallRight>
        <p>{title}</p>
        {isVideo && (
          <VideoDetails>
            <AiFillEye style={{ marginBottom: '-2px' }} />{' '}
            {numeral(views).format('0.a')} Views •{' '}
            {moment(publishedAt).fromNow()}
          </VideoDetails>
        )}
        {isVideo && <p style={{ marginTop: '8px' }}>{description}</p>}
        <VideoChannel>
          {isVideo && <LazyLoadImage src={channelIcon?.url} effect='blur' />}

          <p>{channelTitle}</p>
        </VideoChannel>
      </VideoSmallRight>
    </Row>
  )
}

export default VideoSmall

const Row = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 1rem 0;
  border-bottom: 0.3px solid #4c4c4c;
  cursor: pointer;

  @media (max-width: 520px) {
    font-size: 0.8rem;
  }
`

const VideoSmallLeft = styled.div`
  position: relative;
  text-align: center;
  width: 50%;
  margin-right: 8px;

  img {
    width: 100%;
    max-width: 120px;
    min-width: 120px;
  }
`

const VideoDuration = styled.span`
  position: absolute;
  /* bottom: 0.3rem; */
  bottom: 0.5rem;
  right: 0.3rem;
  /* right: 1.2rem; */
  padding: 0.2rem;
  background: #080808ec;
  border-radius: 3px;
  font-size: 0.9rem;
`
const VideoSmallRight = styled.div`
  padding: 0;

  p {
    margin-bottom: 10px;
    font-size: 1rem;
    color: #fff;
    letter-spacing: 0.2px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    @media (max-width: 520px) {
      font-size: 14px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`

const VideoDetails = styled.div`
  font-size: 0.9rem;

  @media (max-width: 520px) {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
`

const VideoChannel = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    margin-right: 0.5rem;
    cursor: pointer;

    @media (max-width: 520px) {
      display: none;
    }
  }

  p {
    font-size: 0.9rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    margin-bottom: 0;

    @media (max-width: 520px) {
      font-size: 0.9rem;
    }
  }
`
