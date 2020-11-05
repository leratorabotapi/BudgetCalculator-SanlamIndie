import React, { useState, useEffect} from "react"

export default function Home() {

  const [transactions, setTransaction] = useState([])

  localStorage.setItem('accountData', JSON.stringify(transactions));

  useEffect(() => {
    fetch('https://indie-transaction-api.netlify.app//.netlify/functions/api/api')
    .then((res) => res.json())
    .then((data) => setTransaction(data.transactions))
  }, [setTransaction])

  return <div>{JSON.stringify(transactions, null, 2)}</div>
}
