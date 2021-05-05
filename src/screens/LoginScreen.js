import styled from 'styled-components/macro'

function LoginScreen() {
    return (
        <Container>
            <Wrapper>
                <img src="/images/logo.png" alt="logo"/>
                <Btn>Login with Google</Btn>
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