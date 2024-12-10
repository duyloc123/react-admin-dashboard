import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { DashBoard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { User } from "../pages/user";

// configs
import { ROUTE_PATH } from '../configs/constants';
import { MainLayout } from '../layouts/main-layout';
import { SecondaryLayout } from '../layouts/secondary-layout';

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
    layout: MainLayout
  },
  {
    path: ROUTE_PATH.USER,
    component: User,
    layout: MainLayout
  },
  {
    path: ROUTE_PATH.LOGIN,
    component: Login,
  },
  {
    path: ROUTE_PATH.REGISTER,
    component: Register,
  },
]

const renderRoutes = (user: User) => {
  return (
    <Routes>
      {routesConfig.map(route => {
        const Component = route.component || React.Fragment;
        let Layout = route?.layout || React.Fragment;

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
              <Layout>
                <Component />
              </Layout>
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

