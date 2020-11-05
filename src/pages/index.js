import React, { useState, useEffect} from "react"

import ApplicationContext from '../components/ApplicationContext/Application';


export default function Home() {

  const [transactions, setTransaction] = useState()


  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('accountData', JSON.stringify(transactions));
  })

  useEffect(() => {
    fetch('https://indie-transaction-api.netlify.app//.netlify/functions/api/api')
    .then((res) => res.json())
    .then((data) => setTransaction(data.transactions))
  }, [setTransaction])

  return <div className="App">
    <ApplicationContext.Provider
    value= {{
      
    }}>
    <h1>Transactions</h1>

    <pre>{JSON.stringify(transactions, null, 2)}</pre>

    </ApplicationContext.Provider>
    </div>
}
