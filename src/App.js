import { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import { useSelector } from 'react-redux'
import WatchScreen from './screens/WatchScreen'
import SearchScreen from './screens/SearchScreen'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleSidebar = () => setIsOpen((value) => !value)

  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <Main>
        <Sidebar isOpen={isOpen} handleToggleSidebar={handleToggleSidebar} />
        <Container>{children}</Container>
      </Main>
    </>
  )
}

function App() {
  const { accessToken, loading } = useSelector((state) => state.auth)

  const history = useHistory()

  useEffect(() => {
    if (!loading && !accessToken) {
      history.push('/auth')
    }
  }, [accessToken, loading, history])

  return (
    <Switch>
      <Route path='/' exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>

      <Route path='/auth'>
        <LoginScreen />
      </Route>

      <Route path='/search/:query'>
        <Layout>
          <SearchScreen />
        </Layout>
      </Route>

      <Route path='/watch/:id'>
        <Layout>
          <WatchScreen />
        </Layout>
      </Route>

      <Route>
        <Redirect to='/' />
      </Route>
    </Switch>
  )
}

export default App

const Main = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  /* margin-top: 10vh; */
  align-self: flex-start;
`

const Container = styled.div`
  width: 100%;
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
`
