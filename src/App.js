import { useState } from 'react';
import styled from 'styled-components/macro'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSidebar = () => setIsOpen(value => !value)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <Main>
        <Sidebar isOpen={isOpen} handleToggleSidebar={handleToggleSidebar} />
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
  width: 100%;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
`
