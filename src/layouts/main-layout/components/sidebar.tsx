import {
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '../../../configs/constants';

const { Sider } = Layout;

interface SidebarProps {
  collapsed: boolean
}

function Sidebar({ collapsed }: SidebarProps ) {
  const navigate = useNavigate();
  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <VideoCameraOutlined />,
            label: 'Dashboard',
            onClick: () => navigate(ROUTE_PATH.DASHBOARD)
          },
          {
            key: '2',
            icon: <UserOutlined />,
            label: 'User',
            onClick: () => navigate(ROUTE_PATH.USER)
          }
        ]}
      />
    </Sider>
  )
}

export default Sidebar