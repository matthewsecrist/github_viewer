import React from 'react'
import { Container } from 'rbx'
import SearchInput from './components/SearchInput'
import RepoSelect from './containers/RepoSelect'
import RepoDetails from './components/RepoDetails'

const App = () => {
  return (
    <React.Fragment>
      <SearchInput />
      <Container>
        <RepoSelect />
        <RepoDetails />
      </Container>
    </React.Fragment>
  )
}

export default App
