import React, { useState, useEffect} from "react"
import axios from "axios";
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
import { Button } from '@indiefin/galaxy-button'
import social from '../components/images/social.png'

export default function Home() {

  const [userSettings, setUserSettings] = useState({
    refreshOnLoad: true
  });


  const [transactions, setTransactions] = useState(() => {
    if (typeof window !== 'undefined') {
      JSON.parse(localStorage.getItem("transactions") || "[]")
    }
    return []
  }
  );

  const [isFetching, setIsFetching] = useState(false);

  const [balance, setBalance] = useState('')

  const [pages, setPages] = useState([
    {
      name: 'Reports',
      icon: 'report'
    },
    {
      name: 'Transactions',
      icon: 'transaction'
    },
    {
      name: 'Budget',
      icon: 'budget'
    },
    {
      name: 'Accounts',
      icon: 'account'
    },
  
  
  ])
  
  const [activePage, setActivePage] = useState()

  // Modal State
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)
     

  const fetchData = () => {
    setIsFetching(true);
    axios
      .get(
        "https://indie-transaction-api.netlify.app//.netlify/functions/api/api/"
      )
      .then((response) => {
        const data = [...transactions, ...response?.data?.transactions];

        // Append data, add catergory
              
        let transformedData = [];
        data.forEach(transaction => {
          transformedData.push({ ...transaction, category: 'Uncatergorised'});
        });

        localStorage.setItem("transactions", JSON.stringify(transformedData));

        setTransactions(data);
        setActivePage()
        setIsFetching(false);
      });
  };

   // Getting sum of numbers

  useEffect(() => {
    console.log("run once");
    if (!isFetching) {
      if (userSettings.refreshOnLoad) {
        fetchData();
      }
    }
  }, []);

  
  // calculates the total balance -> all negative amounts(expenses) + all positive amounts(income)
  const getBalance = () => {
    const amounts = transactions.map(income => income.amount)
    const money = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    setBalance(money) 
  }
  
  //getBalance is run everytime transactions is updated
  useEffect(() => {
    getBalance() 
  }, [transactions])

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
    <ApplicationContext.Provider
    value= {{ pages, setPages, transactions, showModal, closeModal  }}>   
    
   
    <Topbar />
    <NavBar />
    <div className="App">
    <Row>
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
    <div className="homepageImg" >
    <img src={social} alt="socialsetting" />
    </div>
    </div>
    </Col>

    </Row>
    
    <Row>
    <div className="dashbordDiv4">
    
    </div>
    </Row>
    </div>
    </ApplicationContext.Provider>
    </div>
}