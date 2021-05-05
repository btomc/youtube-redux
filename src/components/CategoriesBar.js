import { useState } from 'react'
import styled from 'styled-components/macro'

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

    const handleClick = () => {
        setActive(value => !value)
    }

    return (
        <Container>
            {keywords.map((value, i) => (
                // <span key={i} onClick={() => handleClick(value)}>{value} active={active}</span>
                <span key={i} onClick={() => handleClick(value)} active={active}>{value} </span>
            ))}
        </Container>
    )
}

export default CategoriesBar


const Container = styled.div`
    padding: 0.5rem 0;
    font-size: 0.8rem;
    display: flex;
    overflow-x: scroll;
    /* width: 100%; */

    &::-webkit-scrollbar {
        width: 0px
    }

    scrollbar-width: none;


    
    span {
        margin-right: 1rem;
        padding: 0.5rem;
        white-space: nowrap;
        border: 1.5px solid #b1bdb4;
        border-radius: 999px;
        /* color: ${({ active }) => active ? 'red' : '#fff'};
        background: ${({ bg }) => bg ? '' : '#606060'}; */

        &:hover {
            background: #374a59;
            cursor: pointer;
        }
    }
`