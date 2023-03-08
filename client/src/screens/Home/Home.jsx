import React from 'react';
import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  ProfileOutlined,
  SettingOutlined
} from '@ant-design/icons';

const Home = () => {
  return (
    <Menu
      mode="horizontal"
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Menu.Item
        key="home"
        style={{ background: 'red', fontSize: '3rem', padding: '0 2rem' }}
      >
        <HomeOutlined />
        Home
      </Menu.Item>
      <Menu.Item key="profile" style={{ fontSize: '3rem', padding: '0 2rem' }}>
        <ProfileOutlined />
        Profile
      </Menu.Item>
      <Menu.Item
        key="settings"
        style={{ background: 'green', fontSize: '3rem', padding: '0 2rem' }}
      >
        <SettingOutlined />
        Settings
      </Menu.Item>
    </Menu>
  );
};

export default Home;
