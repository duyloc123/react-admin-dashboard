import React from 'react';
import { Layout, theme } from 'antd';

const { Content } = Layout;

// components
import Sidebar from './components/sidebar';
import Headerbar from './components/headerbar';

// hooks
import { useCollapse } from '../../hooks/useCollapse';

// interface MainLayoutProps {
//   children?: ReactNode | undefined
// }

// const MainLayout = ({ children }: MainLayoutProps) => {
// const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {

interface MainLayoutProps extends React.PropsWithChildren {}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => { 
  const { collapsed, toggleSidebar } = useCollapse();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sidebar collapsed={collapsed} />
      <Layout>
        <Headerbar 
          collapsed={collapsed}
          colorBgContainer={colorBgContainer}
          toggleSidebar={toggleSidebar}
        />
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;