import React from 'react'
import { string } from 'prop-types'
import { Notification } from 'rbx'

const ErrorMessage = ({ message }) => {
  return <Notification color='danger'>{message}</Notification>
}

ErrorMessage.propTypes = {
  message: string
}

export default ErrorMessage
