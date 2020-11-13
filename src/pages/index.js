import React, { useState, useEffect} from "react"
import axios from "axios";
import './style.css'
import Copy from '../components/Copy'
import Balance from '../components/Balance'
import NavBar from '../components/Navbar'
import Topbar from '../components/Topbar'
import 'antd/dist/antd.css';
import { Button } from '../components/Button/Button'


import ApplicationContext from '../components/ApplicationContext/Application';


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
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
  ];


  return <div>
    <ApplicationContext.Provider
    value= {{ pages, setPages, transactions }}>   
    
   
    <Topbar />
    <NavBar />
    <div className="App">
    <div>
    <Button
   
        backgroundColor="#0075C9"
        label="clear localStorage"
        onClick={() => {}}
        primary={true}
      />
      <button
         onClick={() => {
          localStorage.removeItem("transactions");
          setTransactions([]);
        }}
      >
        clear localStorage
      </button>


      <button disabled={isFetching} onClick={() => fetchData()}>
        fetch new data
      </button>

      <br/>

      <Copy fontType="H1">Account Balance</Copy>

      <Balance amount={balance} />

      

 {/*
      <pre>{JSON.stringify(transactions, null, 2)}</pre> */}
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
      ))}
      
    </div>
      
    </div>
    </ApplicationContext.Provider>
    </div>
}
