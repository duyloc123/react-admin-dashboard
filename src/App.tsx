import React from 'react';

// layout
// import { MainLayout } from './layouts/main-layout';
// import { SecondaryLayout } from './layouts/secondary-layout';
// import { DashBoard } from './pages/dashboard';
// import { User } from './pages/user';
// import { Login } from './pages/login';
// import { Register } from './pages/register';
import { RouteMain } from './routes/routes';

const App: React.FC = () => {
  
  return (
    <>
      <RouteMain />
    </>
  );
};

export default App;