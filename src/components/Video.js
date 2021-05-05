import styled from 'styled-components/macro'
import { AiFillEye } from 'react-icons/ai'

function Video() {
    return (
        <Container>
            <VideoTop>
                <img src="/images/video-pic.jpg" alt="video-pic"/>
                <span>05:43</span>
            </VideoTop>
            <VideoTitle>
                Exclusive Clip | Loki | Disney+ | Most popular series every week
            </VideoTitle>
            <VideoDetails>
                <span>
                    <AiFillEye style={{ marginBottom: '-2px'}} /> 5m Views •
                </span>
                <span>5 days ago</span>
            </VideoDetails>
            <VideoChannel>
                <img src="/images/profile-2.jpg" alt="profile"/>
                <p>TV Promos</p>
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
