import { useState } from 'react';
import styled from 'styled-components/macro'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSidebar = () => setIsOpen(value => !value)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <Main>
        <Sidebar isOpen={isOpen} handleToggleSidebar={handleToggleSidebar} />
        <Container>
          {children}
        </Container>
      </Main>      
    </>
  )
}

function App() {
  

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <Layout>
            <HomeScreen />
          </Layout>
        </Route>
        <Route path='/auth'>
          <LoginScreen />
        </Route>
        <Route path='/search'>
          <Layout>
            <h1>Search Results</h1>
          </Layout>
        </Route>

        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </Router>
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
