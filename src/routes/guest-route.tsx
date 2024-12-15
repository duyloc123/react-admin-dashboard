import React from 'react';
import { Navigate } from 'react-router-dom';

function GuestRoute({ children }: React.PropsWithChildren) {
  const accessToken = window.localStorage.getItem('access_token');

  if(accessToken) {
    return <Navigate to="/" />
  }

  return (
    <>
      {children}
    </>
  )
}

export default GuestRoute