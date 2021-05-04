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
`


const Row = styled.div`
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    gap: 10px;
    width: 100%;
`


const Col = styled.div`
    width: 100%;
`
