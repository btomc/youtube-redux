import styled from 'styled-components/macro'
import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdNotifications, MdApps } from 'react-icons/md'

function Header({ handleToggleSidebar }) {
    return (
        <Container>
            <HeaderMenu size={26} 
                onClick={handleToggleSidebar}
            />
            <Logo src="/images/logo.png" alt="youtube logo"/>

            <SearchForm>
                <SearchBar placeholder='Search' />
                <Btn type='submit'>
                    <AiOutlineSearch size={22} />
                </Btn>
            </SearchForm>

            <HeaderIcons>
                <MdNotifications size={28} />
                <MdApps size={28} />
                <img src="/images/profile.png" alt="avatar"/>
            </HeaderIcons>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
    background: #16181b;
    height: 10vh;
    width: 100%;

    @media (max-width: 520px) {
        padding: 1rem;
    }
`

const HeaderMenu = styled(FaBars)`
    display: none;

    @media (max-width: 520px) {
        display: block;
        cursor: pointer;
    }
`
const Logo = styled.img`
    width: 30px;
    height: 30px;
    object-fit: contain;
    display: block;

    @media (max-width: 520px) {
        display: none;
    }
`

const SearchForm = styled.form`
    flex: 0.6;
    /* align-self: center; */
    display: flex;
    padding: 0.1rem;
    margin: 0 1rem;
    border-radius: 3px;
    border: 1.2px solid;
    background: #121417;

    @media (max-width: 545px) {
        flex: 1;
    }
`

const SearchBar = styled.input`
    width: 100%;
    border: none;
    font-weight: 500;
    background: transparent;
    padding: 0.3rem;
    color: #b1bdb4;

    &:focus {
        outline: none;
    }
`

const Btn = styled.button`
    padding: 0 1.25rem;
    color: #b1bdb4;
    background: transparent;
    border: none;

    &:focus {
        outline: none;
    }
`

const HeaderIcons = styled.div`
    flex: 0.15;
    display: flex;
    justify-content: space-around;
    align-items: center;

    & > *:not(img) {
        @media (max-width: 520px) {
            display: none;
        }
    }

    img {
        border-radius: 50%;
        width: 40px;
        object-fit: contain;
        margin-left: 5px;
    }

    
`
