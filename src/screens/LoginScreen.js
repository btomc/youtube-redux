import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import styled from 'styled-components/macro'
import { login } from '../redux/actions/auth'

function LoginScreen() {
    const dispatch = useDispatch()
    const history = useHistory()

    const accessToken = useSelector(state => state.auth.accessToken)

    const handleLogin = () => {
        dispatch(login())
    }

    useEffect(() => {
        if(accessToken) {
            history.push('/')
        }
    }, [accessToken, history])

    return (
        <Container>
            <Wrapper>
                <h1>Youtube Clone</h1>
                <img src="/images/logo.png" alt="logo"/>
                <Btn onClick={handleLogin}>Login with Google</Btn>
                <Text>A Youtube clone project made using Youtube API</Text>
            </Wrapper>
        </Container>
    )
}

export default LoginScreen

const Container = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
`

const Wrapper = styled.div`
    background: #121417;
    padding: 2rem;
    margin: 0 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 130px;
        height: 130px;
        object-fit: contain;
    }
`
const Btn = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin: 1rem 0 2rem;

    &:focus {
        outline: none;
    }

    &:hover {
        background: #b1bdb4;
    }
`
const Text = styled.p``