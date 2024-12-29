import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../configs/constants';

interface RoleRouteProps extends React.PropsWithChildren {
  roles: string[]
}

function RoleRoute({ roles, children }: RoleRouteProps) {
  const role = 'admin'; // get state from redux
  const navigate = useNavigate();

  React.useEffect(() => {
    if(roles.length === 0) return;
    const checkRole = roles.includes(role);

    if(!checkRole) {
      navigate(ROUTE_PATH.ERROR_403)
    }
  }, [roles])

  return (
    <>{children}</>
  )
}

export default RoleRoute