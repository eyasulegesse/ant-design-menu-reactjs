import { Menu } from 'antd';
import {
  HomeOutlined,
  ContactsOutlined,
  BarsOutlined,
  EditOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
const MenuAnt = () => {
  return (
    <div style={{ width: 200 }}>
      <Menu
        mode='inline'
        defaultOpenKeys={['about']}
        items={[
          {
            label: 'Home',
            key: 'home',
            icon: <HomeOutlined />,
          },
          {
            label: 'About Us',
            key: 'about',
            icon: <BarsOutlined />,
            children: [
              { label: 'Mission', key: 'mission' },
              { label: 'Vision', key: 'vision' },
            ],
          },
          {
            label: 'Contact Us',
            key: 'contact',
            icon: <ContactsOutlined />,
          },

          {
            label: 'User Management',
            key: 'um',
            type: 'group',
            children: [
              {
                label: 'Edit Profile',
                key: 'ep',
                icon: <EditOutlined />,
              },
              {
                label: 'Add User',
                key: 'au',
                icon: <UserAddOutlined />,
              },
              {
                label: 'Sign out',
                key: 'signout',
                danger: true,
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default MenuAnt;
