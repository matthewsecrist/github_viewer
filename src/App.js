import React from 'react'
import { Container } from 'rbx'
import SearchInput from './components/SearchInput'
import RepoList from './components/RepoList'
import RepoDetails from './components/RepoDetails'

const App = () => {
  return (
    <React.Fragment>
      <SearchInput />
      <Container>
        <RepoList />
        <RepoDetails />
      </Container>
    </React.Fragment>
  )
}

export default App
