import { Button, Col, Empty, message, Row, Table, Typography } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import templateCrudTableAntd from '../../assets/file-txt/Example-Crud-Table-Antd.txt'
import './index.css'

const { Title } = Typography

const TableAntd = () => {
  const [getData, setGetData] = useState([])
  const navigate = useNavigate()

  const fetchUser = () => {
    axios
      .get('http://localhost:4000/users')
      .then((response) => {
        setGetData(response.data)
      })
      .catch((err) => {})
  }

  useEffect(() => {
    fetchUser()
  }, [])

  const columns = [
    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Review',
      dataIndex: 'review',
      key: 'review',
    },
    {
      title: 'Action',
      dataIndex: 'action',
      render: (_, record) => {
        return (
          <>
            <Button
              type="primary"
              onClick={() => navigate(`/create-user?id=${record.id}`)}>
              Edit
            </Button>
            <Button type="danger" onClick={() => handleDelete(record)}>
              Delete
            </Button>
          </>
        )
      },
      key: 'action',
    },
  ]

  const handleDelete = (record) => {
    axios
      .delete(`http://localhost:4000/users/${record?.id}`)
      .then((res) => {
        fetchUser()
        message.success('Deleted User Successfully!')
      })
      .catch((err) => {})
  }

  return (
    <>
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
        <Row gutter={[40, 0]}>
          <Col span={18}>
            <Title level={2}>User List</Title>
          </Col>
          <Col span={6}>
            <Button onClick={() => navigate('/create-user')} block>
              Add User
            </Button>
          </Col>
        </Row>
        <a
          href={templateCrudTableAntd}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 underline mb-4">
          Link code...
        </a>
        {/* ko co data */}
        {/* <ConfigProvider renderEmpty={() => <Empty description="Custom message"/>}>
            <Table columns={columns} dataSource={data} />
          </ConfigProvider> */}
        <div className='mt-4'>
          <Table
            columns={columns}
            dataSource={getData ? getData : <Empty />}
            bordered
          />
        </div>
      </div>
    </>
  )
}

export default TableAntd
