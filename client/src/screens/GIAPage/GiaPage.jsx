import { Layout, Menu, Table } from 'antd';
import React from 'react';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined
} from '@ant-design/icons';
import TableGia from './Table';

const GiaPage = () => {
  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Layout.Sider>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} >
            <Menu.Item key="1" icon={<UserOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<LaptopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<NotificationOutlined />}>
              Option 3
            </Menu.Item>
          </Menu>
        </Layout.Sider>
        <Layout.Content>
          <TableGia></TableGia>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default GiaPage;
