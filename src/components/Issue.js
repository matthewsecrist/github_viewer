import React from 'react'

import { Message } from 'rbx'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons'

import Tags from './Tags'

const Issue = ({ title, labels, html_url, body }) => {
  return (
    <Message>
      <Message.Header>
        <p>
          {title} <Tags labels={labels} />
        </p>
        <a href={html_url}>
          <FontAwesomeIcon icon={faExternalLinkSquareAlt} color='white' />
        </a>
      </Message.Header>
      <Message.Body>
        <p>{body.substring(0, 100) + '...'}</p>
      </Message.Body>
    </Message>
  )
}

export default Issue
