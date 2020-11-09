import React, { useState, useEffect} from "react"
import axios from "axios";
import './style.css'
// used to parse date
import moment from 'moment';

import ApplicationContext from '../components/ApplicationContext/Application';


export default function Home() {

  const [userSettings, setUserSettings] = useState({
    refreshOnLoad: true
  });
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  );

  const [isFetching, setIsFetching] = useState(false);

  const [balance, setBalance] = useState('')

  const fetchData = () => {
    setIsFetching(true);
    axios
      .get(
        "https://indie-transaction-api.netlify.app//.netlify/functions/api/api/"
      )
      .then((response) => {
        const data = [...transactions, ...response?.data?.transactions];

        localStorage.setItem("transactions", JSON.stringify(data));
        setTransactions(data);
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

  // parse Date
  // Uses momentJS plugin
  var str = '2011-04-11T10:20:30Z';
  var date = moment(str);
  var dateComponent = date.utc().format('LL');
  var timeComponent = date.utc().format('LTS');
  console.log(dateComponent);
  console.log(timeComponent);

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

  return <div className="App">
    <ApplicationContext.Provider
    value= {{ }}>
    
    <div>
     <h1>data from state</h1>
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

      <p>items in transaction history {transactions.length}</p>

      <pre>{JSON.stringify(transactions, null, 2)}</pre>
    </div>

    <div>
      <h2>Expenses</h2>

      {transactions
      .filter(expenses => expenses.amount < 0 )
      .map(expenses => (

      <div>
        <pre>{JSON.stringify(expenses, null, 2)}</pre>
      </div>

      ))}
    </div>

    <div>
    <h2>Income</h2>
    {transactions
      .filter(income => income.amount > 0 )
      .map(income => (

      <div>
        <pre>{JSON.stringify(income, null, 2)}</pre>
      </div>
      ))}

      <h3>Total Balance: R{balance}</h3>

    </div>
      

    </ApplicationContext.Provider>
    </div>
}
