import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { DashBoard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { User } from "../pages/user";
import { About } from '../pages/about';
import Error403 from '../pages/errors/error-403';

// configs
import { ROLE, ROUTE_PATH } from '../configs/constants';
import { MainLayout } from '../layouts/main-layout';
import { SecondaryLayout } from '../layouts/secondary-layout';
import AuthRoute from './auth-route';
import GuestRoute from './guest-route';
import RoleRoute from './role-route';


type User = {
  email: string;
  role: string;
  company: string;
}

const user: User = {
  email: 'tony@gmail.com',
  role: 'admin',
  company: 'jslancer'
}

const routesConfig = [
  {
    path: ROUTE_PATH.DASHBOARD,
    component: DashBoard,
    layout: MainLayout,
    guard: AuthRoute,
    roles: [ROLE.ADMIN, ROLE.MEMBER, ROLE.OPERATOR]
  },
  {
    path: ROUTE_PATH.USER,
    component: User,
    layout: MainLayout,
    guard: AuthRoute,
    roles: [ROLE.ADMIN, ROLE.OPERATOR]
  },
  {
    path: ROUTE_PATH.LOGIN,
    component: Login,
    guard: GuestRoute
  },
  {
    path: ROUTE_PATH.REGISTER,
    component: Register,
    guard: GuestRoute
  },
  {
    path: ROUTE_PATH.ABOUT,
    component: About
  },
  {
    path: ROUTE_PATH.ERROR_403,
    component: Error403
  },
]

const renderRoutes = (user: User) => {
  return (
    <Routes>
      {routesConfig.map(route => {
        const Component = route.component || React.Fragment;
        let Layout = route?.layout || React.Fragment;
        const Guard = route?.guard || React.Fragment;

        switch (user.company) {
          case 'tma': {
            Layout = SecondaryLayout;
            break;
          }
          default:
            break
        }
        
        return (
          <Route 
            key={route.path}
            path={route.path} 
            element={
              <Guard>
                <Layout>
                  <RoleRoute roles={route.roles || []}>
                    <Component />
                  </RoleRoute>
                </Layout>
              </Guard>
            } 
          />
        )
      })}
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  )
};

export function RouteMain() {
  return renderRoutes(user);
}

