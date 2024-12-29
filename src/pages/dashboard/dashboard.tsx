import { Button, Table } from "antd"
import React from 'react';
import { axiosInstance } from "../../services/initRequest";
// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];

const columns = [
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
];


function Dashboard() {
  const [dataSource, setDataSource] = React.useState([]);  

  async function fetchUser() {
    const data = await axiosInstance('https://tony-auth-express-vdee-6j0s-fhovok9bu.vercel.app/api/user', {
      method: 'GET',
      showSpinner: true
    });
    setDataSource(data.data.data);
  }
  

  return (
    <div>
      <Button type="primary" onClick={fetchUser}>Fetch User</Button> <br /><br />
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Dashboard