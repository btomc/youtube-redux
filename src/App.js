import styled from 'styled-components/macro'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <Main>
        <Sidebar />
        <Container>
          <HomeScreen />
        </Container>
      </Main>      
    </>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  height: 90vh;
`

const Container = styled.div`
  width: 100%;
  border: 2px solid dodgerblue;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`
