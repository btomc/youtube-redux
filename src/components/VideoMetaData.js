import styled from 'styled-components/macro'
import moment from 'moment'
import numeral from 'numeral'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'

function VideoMetaData() {
  return (
    <VideoDataWrap>
      <VideoDataTop>
        <h3>Video Title</h3>
        <TopContainer>
          <span>
            {numeral(10000).format('0.a')} Views •{' '}
            {moment('2021-05-23').fromNow()}
          </span>

          <div>
            <span style={{ marginRight: '10px' }}>
              <MdThumbUp size={26} />
              {numeral(10000).format('0.a')}
            </span>
            <span style={{ marginRight: '10px' }}>
              <MdThumbDown size={26} />
              {numeral(10000).format('0.a')}
            </span>
          </div>
        </TopContainer>
      </VideoDataTop>
      <VideoDataChannel>
        <div style={{ display: 'flex' }}>
          <img src='/images/profile.png' alt='avatar' />
          <ChannelWrap>
            <span style={{ marginBottom: '3px' }}>Bohemian Rhapsody</span>
            <span style={{ fontSize: '14px' }}>
              {numeral(10000).format('0.a')} Subscribers
            </span>
          </ChannelWrap>
        </div>
        <Btn>Subscribe</Btn>
      </VideoDataChannel>
      <VideoDataDesc>
        <ShowMoreText
          lines={3}
          more='SHOW MORE'
          less='SHOW LESS'
          expanded={false}
          style={{ textDecoration: 'none', fontWeight: '500', color: '#fff' }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          deserunt accusamus ducimus impedit, facilis nesciunt, quae iure cum
          excepturi ex necessitatibus dolorum, neque in voluptas corrupti
          consequatur Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eligendi ab qui, earum iure libero porro. Enim deserunt eos aliquam
          totam? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Deserunt, doloremque.
        </ShowMoreText>
      </VideoDataDesc>
    </VideoDataWrap>
  )
}

export default VideoMetaData

const VideoDataWrap = styled.div`
  padding: 1rem 0;
`
const VideoDataTop = styled.div`
  span {
    cursor: pointer;
  }
`
const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`
const VideoDataChannel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 0;
  padding: 1rem 0;
  border-top: 0.2px solid #4c4c4c;
  border-bottom: 0.2px solid #4c4c4c;

  div > img {
    border-radius: 50%;
    width: 50px;
    object-fit: contain;
    margin-right: 1.2rem;
  }
`

const ChannelWrap = styled.div`
  display: flex;
  flex-direction: column;
`

const Btn = styled.button`
  border: none;
  outline: none;
  padding: 1rem;
  margin: 1rem;
  cursor: pointer;
  border-radius: 2px;
  background: red;
  color: #fff;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.3px;

  &:hover {
    opacity: 0.88;
  }
`
const VideoDataDesc = styled.div`
  font-size: 0.9rem;
  white-space: pre-line;
  padding-bottom: 8px;
  border-bottom: 0.2px solid #4c4c4c;
`
