import React from 'react'
import { Container } from 'rbx'
import SearchInput from './components/SearchInput'
import RepoList from './components/RepoList'

const App = () => {
  return (
    <React.Fragment>
      <SearchInput />
      <Container>
        <RepoList />
      </Container>
    </React.Fragment>
  )
}

export default App
