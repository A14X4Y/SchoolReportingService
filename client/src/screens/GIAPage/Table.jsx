import React from 'react';
import { Table } from 'antd';
import { columns, data } from './Data';

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableGia = () => (
  <Table columns={columns} dataSource={data} onChange={onChange} />
);

export default TableGia;
