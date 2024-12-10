import { Layout, Menu } from 'antd';

const { Header } = Layout;

interface MenuItemProps {
  key: number,
  label: string;
}

interface HeaderbarProps {
  menuItems: MenuItemProps[]
}

function Headerbar({ menuItems }: HeaderbarProps) {
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className="demo-logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={menuItems}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  )
}

export default Headerbar