import React from 'react';
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }: React.PropsWithChildren) {
  const accessToken = window.localStorage.getItem('access_token');

  if(!accessToken) {
    return <Navigate to="/login" />
  }
  
  return (
    <>
      {children}
    </>
  )
}

export default AuthRoute;