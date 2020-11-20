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

        setTransactions(transformedData)
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

  // filter Expenses - MoneyOut
  const moneyOut = transactions.filter(expenses => expenses.amount < 0 )

   // filter Income - MoneyIn
  const moneyIn = transactions.filter(income => income.amount > 0 )

  // Get total of Income
  const totalMoneyIn = moneyIn.map(income => income.amount)
  const finalTotalMoneyIn = totalMoneyIn.reduce((acc, item) => (acc += item), 0).toFixed(2)
  console.log(finalTotalMoneyIn)

   // Get total of Income
  const totalMoneyOut = moneyOut.map(income => income.amount)
  const finalTotalMoneyOut = totalMoneyOut.reduce((acc, item) => (acc += item), 0).toFixed(2)
  console.log(finalTotalMoneyOut)


  const getExpenses = () => {
    
  }

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
        <TransactionContext.Provider value={{ 
          transactions, setTransactions, 
          showModal, setShowModal,
          balance, setBalance,
          isFetching, setIsFetching,
          moneyIn, moneyOut,
          finalTotalMoneyIn, finalTotalMoneyOut 
          }}>
            {children}
        </TransactionContext.Provider>
  )
}
export default Layout
