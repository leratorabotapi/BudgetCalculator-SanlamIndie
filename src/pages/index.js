import React, { useState, useEffect} from "react"
import axios from "axios";

import ApplicationContext from '../components/ApplicationContext/Application';


export default function Home() {

  const [userSettings, setUserSettings] = useState({
    refreshOnLoad: true
  });
  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage.getItem("transactions") || "[]")
  );

  const [isFetching, setIsFetching] = useState(false);

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

  useEffect(() => {
    console.log("run once");
    if (!isFetching) {
      if (userSettings.refreshOnLoad) {
        fetchData();
      }
    }
  }, []);

  return <div className="App">
    <ApplicationContext.Provider
    value= {{ }}>

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
      </button>      <p>items in transaction history {transactions.length}</p>
      <pre>{JSON.stringify(transactions, null, 2)}</pre>

      <h2>Expenses</h2>
      {transactions
      .filter(expenses => expenses.amount < 0 )
      .map(expenses => (<pre>{JSON.stringify(expenses, null, 2)}</pre>))}

      <h2>Income</h2>
      {transactions
      .filter(income => income.amount > 0 )
      .map(income => (<pre>{JSON.stringify(income, null, 2)}</pre>))}
      
    </ApplicationContext.Provider>
    </div>
}
