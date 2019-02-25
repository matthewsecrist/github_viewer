import React from 'react'
import { Notification } from 'rbx'

const ErrorMessage = ({ message }) => {
  return <Notification color='danger'>{message}</Notification>
}

export default ErrorMessage
