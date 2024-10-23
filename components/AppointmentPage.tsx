import React from 'react';

const AppointmentPage = () => {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <iframe
        src="https://calendly.com/moussgaye0/30min"
        width="100%"
        height="600px"
        frameBorder="0"
        scrolling="no"
        style={{ border: 'none' }}
      ></iframe>
    </div>
  );
};

export default AppointmentPage;
