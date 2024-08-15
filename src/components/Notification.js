import React from 'react';

const Notification = ({ message, type }) => {
  if (!message) return null;

  return (
    <div style={{ color: type === 'error' ? 'red' : 'green', margin: '20px 0' }}>
      {message}
    </div>
  );
};

export default Notification;
