import React, { useState, useEffect } from "react"
import axios from "axios"
import TransactionContext from '../../context/transations'

const Layout = ({ children }) => {

  const [userSettings, setUserSettings] = useState({
    refreshOnLoad: true,
  })

  const [transactions, setTransactions] = useState(
    JSON.parse(localStorage?.getItem("transactions") || "[]")
  );

  const [isFetching, setIsFetching] = useState(false)

  const [balance, setBalance] = useState("")


  // Modal State
  const [showModal, setShowModal] = useState(false)
  const openModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)


  const categories = [
    {
      icon: "🎧",
      name: "Entertaiment",
      pattern: "spotify"
    },
    {
      icon: "🎧",
      name: "Entertaiment",
      pattern: "netflix"
    },
    {
      icon: "🎧",
      name: "Entertaiment",
      pattern: "spotify"
    },
    {
      icon: "🚗",
      name: "Transportation",
      pattern: "caltex"
    },
    {
      icon: "🍕",
      name: "Food",
      pattern: "MCD"
    },
    {
      icon: "🎧",
      name: "Entertaiment",
      pattern: "spotify"
    },
    {
      icon: "🚗",
      name: "Transportation",
      pattern: "uber"
    },
    {
      icon: "🍕",
      name: "Food",
      pattern: "checkers"
    },
    {
      icon: "💸",
      name: "Bank",
      pattern: "fee"
    },
    {
      icon: "🚗",
      name: "Transportation",
      pattern: "petrol"
    },
    {
      icon: "🍕",
      name: "Food",
      pattern: "groceries"
    },
    {
      icon: "🍕",
      name: "Food",
      pattern: "food"
    },
    {
      icon: "☕️",
      name: "Café",
      pattern: "vida"
    },
    {
      icon: "☕️",
      name: "Café",
      pattern: "seattle"
    },
    {
      icon: "🍕",
      name: "Food",
      pattern: "pnp"
    },
    {
      icon: "🍕",
      name: "Food",
      pattern: "superspar"
    },
    {
      icon: "🍕",
      name: "Food",
      pattern: "jerrys"
    },
    {
      icon: "💰",
      name: "Online purchases",
      pattern: "snapscan"
    },
    {
      icon: "🏦",
      name: "Income",
      pattern: "income"
    },
    {
      icon: "🏦",
      name: "Income",
      pattern: "healthfood"
    },
    {
      icon: "💳",
      name: "Shopping",
      pattern: "dischem"
    },
    {
      icon: "💳",
      name: "Shopping",
      pattern: "waterfront"
    } ,
    {
      icon: "💳",
      name: "Shopping",
      pattern: "woolworths"
    },
    {
      icon: "💳",
      name: "Shopping",
      pattern: "clicks"
    },
    {
      icon: "🔮",
      name: "Insurance",
      pattern: "insurance"
    },
    {
      icon: "🛠",
      name: "Utilities",
      pattern: "airtime"
    },
    {
      icon: "🛠",
      name: "Utilities",
      pattern: "electricity"
    },
    {
      icon: "🐶",
      name: "Pets",
      pattern: "pets"
    },
    {
      icon: "🐶",
      name: "Pets",
      pattern: "animal"
    }
  ];

  const fetchData = () => {
    setIsFetching(true)
    axios
      .get(
        "https://indie-transaction-api.netlify.app//.netlify/functions/api/api/"
      )
      .then((response) => {
        const data = [...transactions, ...response?.data?.transactions]

        // Append data, add catergory

        let transformedData = []
        data.forEach(transaction => {
          transformedData.push({ ...transaction, category: "Uncatergorised" })
        })

      
        // this will categorize all transaction, it only
        // checks if pattern is included within description
        let categorizedTransactions = transformedData.map((transaction) => {
          // by default all transactions are `uncategorized`
          const categorizedTransaction = {
            ...transaction,
            category: "Uncategorized"
          };
      
          categories.forEach((category) => {
            // if a match has been found, the current category will be assigned
            // to the current product
            if (transaction.description.toLowerCase().includes(category.pattern)) {
              categorizedTransaction.category = category.name;
            }
          });
      
          // this will just update all transactions with fallback or real categories
          return categorizedTransaction;
        });

        localStorage?.setItem("transactions", JSON.stringify(categorizedTransactions))
        
        setTransactions(categorizedTransactions)
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

   // Get total of Income
  const totalMoneyOut = moneyOut.map(income => income.amount)
  const finalTotalMoneyOut = totalMoneyOut.reduce((acc, item) => (acc += item), 0).toFixed(2)

  console.log("Balance should be: " + balance + "ZAR")

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
