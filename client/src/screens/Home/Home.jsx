import React from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Layout
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh'
      }}
    >
      <Menu
        mode="horizontal"
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          alignItems: 'center'
        }}
      >
        <NavLink>
          <Menu.Item key="home">Home</Menu.Item>
        </NavLink>
        <NavLink to="fg">
          <Menu.Item key="apps">ФГ</Menu.Item>
        </NavLink>
        <NavLink to="/gia">
          <Menu.Item key="settings">ГИА</Menu.Item>
        </NavLink>
      </Menu>
    </Layout>
  );
};

export default Home;
