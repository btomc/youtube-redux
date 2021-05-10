import { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { getPopularVideos, getVideosByCategory } from '../redux/actions/videos'

const keywords = [
  'All',
  'React js',
  'React Native',
  'Redux',
  'Piano',
  'JavaScript',
  'Music',
  'Coding',
  'Trailers',
  'Next js',
  'Football',
  'Yoga',
  'Design',
  'CSS',
  // 'Mysteries',
  // 'Photography',
  // 'Baking',
]

function CategoriesBar() {
  const [active, setActive] = useState('All')

  const dispatch = useDispatch()

  const handleClick = (value) => {
    setActive(value)
    if (value === 'All') {
      dispatch(getPopularVideos())
    } else {
      dispatch(getVideosByCategory(value))
    }
  }

  return (
    <Container>
      {keywords.map((value, i) => (
        <span key={i} onClick={() => handleClick(value)} active={active}>
          {value}{' '}
        </span>
      ))}
    </Container>
  )
}

export default CategoriesBar

const Container = styled.div`
  /* padding: 0.5rem 0; */
  padding: 0.8rem 0 3.8rem;
  font-size: 0.8rem;
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 0px;
  }

  scrollbar-width: none;

  span {
    margin-right: 1rem;
    padding: 0.5rem;
    white-space: nowrap;
    border: 1.5px solid #b1bdb4;
    border-radius: 999px;
    height: 32px;
    /* color: ${({ active }) => (active ? 'red' : '#fff')};
        background: ${({ bg }) => (bg ? '' : '#606060')}; */

    &:hover {
      background: #374a59;
      cursor: pointer;
    }
  }
`
