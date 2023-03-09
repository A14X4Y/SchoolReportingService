const columns = [
  {
    title: 'Год',
    dataIndex: 'year',
    filters: [
      {
        text: 2020,
        value: 2020
      }
    ],
    // filterMode: 'tree',
    // filterSearch: true,
    onFilter: (value, record) => record.year === value
  },

  {
    title: 'Имена',
    dataIndex: 'name',
    filters: [
      {
        text: 'Joe',
        value: 'Joe'
      },
      {
        text: 'Category 1',
        value: 'Category 1',
        children: [
          {
            text: 'Yellow',
            value: 'Yellow'
          },
          {
            text: 'Pink',
            value: 'Pink'
          }
        ]
      },
      {
        text: 'Category 2',
        value: 'Category 2',
        children: [
          {
            text: 'Green',
            value: 'Green'
          },
          {
            text: 'Black',
            value: 'Black'
          }
        ]
      }
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value),
    width: '1fr'
  },
  {
    title: 'Возраст',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London'
      },
      {
        text: 'New York',
        value: 'New York'
      }
    ],
    onFilter: (value, record) => record.address.startsWith(value),
    filterSearch: true,
    width: '1fr'
  }
];

const data = [
  {
    key: '1',
    year: 2020,
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    year: 2021,
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    year: 2020,
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park'
  },
  {
    key: '4',
    year: 2020,
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park'
  }
];

export { data, columns };
