import React, { useState, useEffect} from "react"

export default function Home() {

  const [transactions, setTransaction] = useState([])

  // Save to localStorage
  localStorage.setItem('accountData', JSON.stringify(transactions));

  const dataRefresh = function () {
  // Get the existing data
    var existing = localStorage.getItem('accountData');

// If no existing data, create an array
// Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split() : [];

// Add new data to localStorage Array
    existing.push(transactions);

// Save back to localStorage
    localStorage.setItem('accountData', JSON.stringify(existing));
  }

  useEffect(() => {
    fetch('https://indie-transaction-api.netlify.app//.netlify/functions/api/api')
    .then((res) => res.json())
    .then((data) => setTransaction(data.transactions))
  }, [setTransaction])

  return <div>

    <button onClick={dataRefresh()} >Fetch</button>

    <button>Refresh</button>

    <pre>{JSON.stringify(transactions, null, 2)}</pre>
    
    </div>
}
