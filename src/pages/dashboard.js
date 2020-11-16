import React, { useState, useEffect, useContext } from "react"
import './style.css'
import Copy from '../components/Copy'
import Date from '../components/Date'
import Image from '../components/Image'
import Balance from '../components/Balance'
import NavBar from '../components/Navbar'
import Topbar from '../components/Topbar'
import 'antd/dist/antd.css';
// import { Button } from '../components/Button/Button'
import { Table, Space, Row, Col } from 'antd'
import 'antd/dist/antd.css'
import ApplicationContext from '../components/ApplicationContext/Application';
import Modal from "../components/Modal";
import Icon from "../components/Icon"
import { Button } from '@indiefin/galaxy-button'
import social from '../components/images/social.png'
import { Line } from 'react-chartjs-2';

export default function Home() {

  const { transactions, showModal, closeModal, openModal, balance, setBalance, isFetching, setIsFetching } = useContext(ApplicationContext);

  const columns = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      render: (text) => 
      <Copy fontType="Body2">{text}</Copy>,
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      render: (text) => (
        <Space size="middle">
          <Copy fontType="Body2">{text}</Copy>
          <a>Edit</a>
        </Space>
      )
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (text) => 
      <Copy fontType="Body2"><Balance amount={text}/></Copy>,
    }
  ]

  
  const rowSelection = {
    onClick: (row) => {
      console.log(row)
    }
  }

  return <div>
    <Topbar />
    <NavBar />
    <div className="App">
    <Row>
      <Col span={23}>
        <Copy fontType="Body3" >Wolfgang Mozart</Copy>
      </Col>
      <Col span={1}>
          <Icon name="search" size="large" />
       </Col>
  
    <Col span={24} align="middle">
      <Copy fontType="H3" variant="light">Your current budget
      </Copy>
    </Col>
    </Row>
   <Row>
   <Col span={24}>
    <div>
      {/* Modal button */}
      {!showModal && ( <Button kind="filled" color="blue" size="regular" handleClick={openModal}>Open Modal</Button> )}
      <Modal closeModal={closeModal} showModal={showModal} title="Modal Example">
        {/* <input type="text" id="category" name="" placeholder="e.g Category" /><br/>
        <hr /> */}
        <Balance amount={balance} />
      </Modal>

      <Button 
          kind="filled" 
          color="blue" 
          size="regular" 
          handleClick={() => {
          localStorage.removeItem("transactions");
          setTransactions([]);
        }}>clear localStorage
      </Button>

      <Button
          color="blue"
          disabled={isFetching}
          handleClick={() => fetchData()}
          kind="filled"
          size="regular"
          type="button"
        >
         fetch new data
        </Button>
 
      {/* <Button disabled={isFetching} onClick={() => fetchData()} primary={true} label="fetch new data" /> */}

      <br/>
{/*
      <Copy fontType="H1">Account Balance</Copy>

      <Balance amount={balance} />

 
      <pre>{JSON.stringify(transactions, null, 2)}</pre> 
    </div>

    <div>
      <Copy fontType="H1">Expenses</Copy>

      {transactions
      .filter(expenses => expenses.amount < 0 )
      .map(expenses => (
      
      <Copy>
      <div>
        <pre>{JSON.stringify(expenses, null, 2)}</pre>
      </div>
      </Copy>

      ))}
    </div>

    <div>
    <Copy fontType="H1">Income</Copy>
    {transactions
      .filter(income => income.amount > 0 )
      .map(income => (

      <div>
       <Copy> <pre>{JSON.stringify(income, null, 2)}</pre></Copy>
      </div>
      ))}*/}
      
    </div>
    </Col>
    </Row>

    <Row>  

    <Col span={12}>
    <div className="dashbordDiv2">
      <Copy fontType="H4" weight="bold">Recent Transactions</Copy>
     <div className="dashboardTable">
        <Table pagination={{
              total: 5,
              pageSize: 5,
              hideOnSinglePage: true,
            }}
            columns={columns} dataSource={transactions}
            showHeader={false}
            size="small"
            />
      </div>
    </div>
    </Col>

    <Col span={12}>
    <div className="dashbordDiv3">
    <Copy fontType="H4" weight="bold">Tips & Advice</Copy>
    <Copy fontType="Body2">Well done! you managed to save {} from last months budget. You can save up to 15% more if you target your spending on best value shopping deals :)</Copy>
    <img className="homepageImg" src={social} alt="socialsetting" />
    </div>
    </Col>

    </Row>
    
    <Row>
    <div className="dashbordDiv4">
    <Col span={24}> <Copy fontType="H4" weight="bold">Expenditure</Copy></Col>
    <Line
     width={100}
     height={30}
     data={{
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 30, 5, 2, 3, 2],
            backgroundColor: 
                'rgba(230, 233, 250, 0.3)',
            borderColor: 
                'rgba(70,78,88,1)',
            pointBackgroundColor:
              'rgba(0,25,77,1)',
            
            borderWidth: 1,
        }]
    }}
   
 />

    </div>
    </Row>
    </div>
    </div>
}