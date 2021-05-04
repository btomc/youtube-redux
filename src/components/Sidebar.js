import styled from 'styled-components/macro'
import {
    MdSubscriptions,
    MdExitToApp,
    MdThumbUp,
    MdHistory,
    MdLibraryBooks,
    MdHome
} from 'react-icons/md'
import { IoMdCompass } from 'react-icons/io'

function Sidebar({ isOpen, handleToggleSidebar }) {
    return (
        <Container isOpen={isOpen} onClick={handleToggleSidebar}>
            <Item >
                <MdHome size={23} />
                <span>Home</span>
            </Item>
            <Item>
                <MdSubscriptions size={23} />
                <span>Subscriptions</span>
            </Item>
            <Item>
                <MdThumbUp size={23} />
                <span>Liked Videos</span>
            </Item>
            <Item>
                <MdHistory size={23} />
                <span>History</span>
            </Item>
            <Item>
                <MdLibraryBooks size={23} />
                <span>Library</span>
            </Item>
            <Item>
                <IoMdCompass size={23} />
                <span>Explore</span>
            </Item>

            <hr />
            <Item>
                <MdExitToApp size={23} />
                <span>Log Out</span>
            </Item>
            <hr />
        </Container>
    )
}

export default Sidebar

const Container = styled.nav`
    background: #16181b;
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 90vh;
    padding-top: 2rem;
    transition: .3s ease-in-out;

    @media (max-width: 1224px) {
        width: 90px;
    }

    @media (max-width: 520px) {
        display: ${({ isOpen }) => isOpen ? 'none' : 'block'};
        /* transform: ${({ isOpen }) => isOpen ? 'translateX: -100%' : 'translateX: 0'}; */
        transition: all 0.2s ease-in;
        position: fixed;
        z-index: 999;
    }

    hr {
        background: #4c4c4c;
        margin: 1rem 0;
    }
`

const Item = styled.div`
    display: flex;
    align-items: center;
    padding: 0.6rem 1.5rem;
    margin: 0.2rem 0;
    cursor: pointer;

    @media (max-width: 1224px) {
        justify-content: center;
    }

    span {
        margin-left: 1rem;
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.4px;

        @media (max-width: 1224px) {
            display: none;
        }
    }

    &:hover {
        background: #4c4c4c;
    }
`
