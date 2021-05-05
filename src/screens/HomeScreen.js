import styled from 'styled-components'
import CategoriesBar from "../components/CategoriesBar";
import Video from "../components/Video";

function HomeScreen() {
    return (
        <Container>
            <CategoriesBar />
            <Row>
                {[...new Array(20)].map(() => (
                    <Col>
                        <Video />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default HomeScreen

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`


const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    /* width: 100%; */

    @media (max-width: 1160px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 440px) {
        grid-template-columns: 1fr;
    }
`


const Col = styled.div`
    /* max-width: 320px; */
`
