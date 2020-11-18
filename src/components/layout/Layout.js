import React, { useState, useEffect } from "react"
import axios from "axios"
import TransactionContext from '../../context/transations'

const Layout = ({ children }) => {

  const [userSettings, setUserSettings] = useState({
    refreshOnLoad: true,
  })

  const [transactions, setTransactions] = useState(() => {
    if (typeof window !== "undefined") {
      JSON.parse(localStorage.getItem("transactions") || "[]")
    }
    return []
  })

  const [isFetching, setIsFetching] = useState(false)

  const [balance, setBalance] = useState("")

  const [pages, setPages] = useState([
    {
      name: "Reports",
      icon: "report",
    },
    {
      name: "Transactions",
      icon: "transaction",
    },
    {
      name: "Budget",
      icon: "budget",
    },
    {
      name: "Accounts",
      icon: "account",
    },
  ])

  const [activePage, setActivePage] = useState()

  // Modal State
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  const fetchData = () => {
    setIsFetching(true)
    axios
      .get(
        "https://indie-transaction-api.netlify.app//.netlify/functions/api/api/"
      )
      .then(response => {
        const data = [...transactions, ...response?.data?.transactions]

        // Append data, add catergory

        let transformedData = []
        data.forEach(transaction => {
          transformedData.push({ ...transaction, category: "Uncatergorised" })
        })

        localStorage.setItem("transactions", JSON.stringify(transformedData))

        setTransactions(data)
        setActivePage()
        setIsFetching(false)
      })
  }

  // Getting sum of numbers

  useEffect(() => {
    console.log("run once")
    if (!isFetching) {
      if (userSettings.refreshOnLoad) {
        fetchData()
      }
    }
  }, [])

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

  return (
        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
  )
}
export default Layout
