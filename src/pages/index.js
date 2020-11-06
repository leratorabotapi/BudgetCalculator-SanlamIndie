import React, { useState, useEffect} from "react"

import ApplicationContext from '../components/ApplicationContext/Application';


export default function Home() {

  const [transactions, setTransaction] = useState()


  useEffect(() => {

    // Get the existing data
    var existing = localStorage.getItem('accountData');

    // If no existing data, use the value by itself
    // Otherwise, add the new value to it
    var data = existing ? existing + transactions : transactions;

    // Save back to localStorage
    localStorage.setItem('accountData', data );
    
    })


  useEffect(() => {
    fetch('https://indie-transaction-api.netlify.app//.netlify/functions/api/api')
    .then((res) => res.json())
    .then((data) => setTransaction(data.transactions))
  }, [])

  return <div className="App">
    <ApplicationContext.Provider
    value= {{ }}>
    <h1>Transactions</h1>

    <pre>{JSON.stringify(transactions, null, 2)}</pre>

    </ApplicationContext.Provider>
    </div>
}
