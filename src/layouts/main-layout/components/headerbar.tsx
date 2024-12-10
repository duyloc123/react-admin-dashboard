import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout } from 'antd';

const { Header } = Layout;

interface HeaderbarProps {
  collapsed: boolean;
  colorBgContainer: string;
  toggleSidebar: () => void;
}

function Headerbar({ collapsed, colorBgContainer, toggleSidebar }: HeaderbarProps) {
  return (
    <Header style={{ padding: 0, background: colorBgContainer }}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={toggleSidebar}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Header>
  )
}

export default Headerbar