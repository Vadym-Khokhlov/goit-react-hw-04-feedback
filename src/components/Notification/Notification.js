import React from 'react';
import { NotificationMessage } from './Notification.styled';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <NotificationMessage>{message}</NotificationMessage>;
}

Notification.propTypes = { message: PropTypes.string.isRequired };
