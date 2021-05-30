import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import styled from 'styled-components/macro'
import { AiFillEye } from 'react-icons/ai'

function VideoSmall() {
  const seconds = moment.duration('100').asSeconds()
  const formattedDuration = moment.utc(seconds * 1000).format('mm:ss')

  return (
    <Row>
      <VideoSmallLeft>
        <LazyLoadImage src='/images/video-pic.jpg' effect='blur' />
        <VideoDuration>{formattedDuration}</VideoDuration>
      </VideoSmallLeft>
      <VideoSmallRight>
        <p>Be a full stack developer in 1 month</p>
        <VideoDetails>
          <AiFillEye style={{ marginBottom: '-2px' }} />{' '}
          {numeral(100000).format('0.a')} Views •{' '}
          {moment('2021-05-26').fromNow()}
        </VideoDetails>
        <VideoChannel>
          {/* <LazyLoadImage src='images/profile.png' effect='blur' /> */}
          <p>TV Promos</p>
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

  img {
    width: 100%;
  }
`

const VideoDuration = styled.span`
  position: absolute;
  bottom: 0.3rem;
  right: 0.3rem;
  padding: 0.2rem;
  background: #080808ec;
  border-radius: 3px;
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
    -webkit-line-clamp: 1;
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

    @media (max-width: 520px) {
      font-size: 0.9rem;
    }
  }
`
