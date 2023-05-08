import { useEffect, useState } from 'react';
import { Table, Spin } from 'antd';
const TableComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const columns = [
    {
      key: 1,
      title: 'Id',
      dataIndex: 'id',
    },
    {
      key: 2,
      title: 'User Id',
      dataIndex: 'userId',
      sorter: (a, b) => {
        return a.userId > b.userId;
      },
    },
    {
      key: 3,
      title: 'Status',
      dataIndex: 'completed',
      render: (completed) => {
        return <p>{completed ? 'Complete' : 'In Progress'}</p>;
      },
      filters: [
        { text: 'Complete', value: true },
        { text: 'In Progress', value: false },
      ],
      onFilter: (value, record) => {
        return value === record.completed;
      },
    },
  ];
  return (
    <Table
      loading={loading}
      columns={columns}
      dataSource={data}
      pagination={{
        current: page,
        pageSize: pageSize,
        onChange: (page, pageSize) => {
          setPage(page);
          setPageSize(pageSize);
        },
      }}
    />
  );
};
export default TableComponent;
