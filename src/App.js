import React from 'react'
import { Container, Hero, Title } from 'rbx'
import SearchInput from './components/SearchInput'
import RepoSelect from './components/RepoSelect'
import RepoDetails from './components/RepoDetails'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const App = () => {
  return (
    <React.Fragment>
      <Hero>
        <Hero.Body>
          <Container textAlign='centered'>
            <Title>
              <FontAwesomeIcon icon={faGithub} /> Github Issues Viewer
            </Title>
          </Container>
        </Hero.Body>
      </Hero>
      <SearchInput />
      <Container>
        <RepoSelect />
        <RepoDetails />
      </Container>
    </React.Fragment>
  )
}

export default App
