import { Button, Table, Modal, Input } from 'antd';
import { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
const TableCrud = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [studentData, setstudentData] = useState(null);
  const [data, setData] = useState([
    {
      id: 1,
      name: 'Eyasu',
      email: 'sss@gmail.com',
      address: 'Arat Killo',
    },
    {
      id: 2,
      name: 'Yodit',
      email: 'yodit@gmail.com',
      address: 'Arat Killo',
    },
    {
      id: 3,
      name: 'Blen',
      email: 'blen@gmail.com',
      address: 'Arat Killo',
    },
    {
      id: 4,
      name: 'Arsema',
      email: 'arsema@gmail.com',
      address: 'Arat Killo',
    },
  ]);
  const columns = [
    {
      key: 1,
      title: 'Id',
      dataIndex: 'id',
    },
    {
      key: 2,
      title: 'Name',
      dataIndex: 'name',
    },
    {
      key: 3,
      title: 'Email',
      dataIndex: 'email',
    },
    {
      key: 4,
      title: 'Address',
      dataIndex: 'address',
    },
    {
      key: 5,
      title: 'Actions',
      render: (record) => {
        return (
          <>
            <DeleteOutlined
              onClick={() => {
                deleteHandeler(record);
              }}
              style={{ color: 'red', marginRight: 10 }}
            />
            <EditOutlined onClick={() => onEditHandler(record)} />
          </>
        );
      },
    },
  ];

  const deleteHandeler = (student) => {
    Modal.confirm({
      title: 'Are You sure wants to Delete this Record',
      okText: 'Yes',
      okType: 'danger',
      onOk: () => {
        return setData((prev) => prev.filter((stu) => stu.id !== student.id));
      },
    });
  };
  const onEditHandler = (record) => {
    setIsEditing(true);
    setstudentData({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setstudentData(null);
  };
  const clickHandler = () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const newsStudent = {
      id: randomNumber,
      name: 'Name' + randomNumber,
      email: randomNumber + '@gmail.com',
      address: randomNumber + 'Arat Killo',
    };
    setData((prev) => {
      return [newsStudent, ...prev];
    });
  };
  return (
    <div>
      <Button onClick={clickHandler}>Add News Student</Button>
      <Table columns={columns} dataSource={data} />
      <Modal
        open={isEditing}
        title='Edit Student'
        okText='Save'
        onCancel={() => resetEditing()}
        onOk={() => {
          setData((prev) => {
            return prev.map((student) => {
              if (student.id === studentData.id) {
                return studentData;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={studentData?.name}
          onChange={(e) =>
            setstudentData((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
        <Input
          value={studentData?.email}
          style={{ marginTop: 10 }}
          onChange={(e) =>
            setstudentData((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
        <Input
          value={studentData?.address}
          style={{ marginTop: 10 }}
          onChange={(e) =>
            setstudentData((prev) => {
              return { ...prev, address: e.target.value };
            })
          }
        />
      </Modal>
    </div>
  );
};

export default TableCrud;
