import React from 'react'
import { string, array } from 'prop-types'
import { Message } from 'rbx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import Tags from './Tags'

const Issue = ({ node_id: nodeId, title, labels, html_url: htmlUrl, body }) => (
  <Message key={nodeId}>
    <Message.Header>
      <p>
        {title} <Tags labels={labels} />
      </p>
      <a href={htmlUrl}>
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} color='white' />
      </a>
    </Message.Header>
    <Message.Body>
      <p>{body.substring(0, 100) + '...'}</p>
    </Message.Body>
  </Message>
)

Issue.propTypes = {
  node_id: string.isRequired,
  title: string.isRequired,
  labels: array.isRequired,
  html_url: string.isRequired,
  body: string.isRequired
}

export default Issue
