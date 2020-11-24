import React, { useContext } from 'react'
import TransactionContext from '../../context/transations'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './style.css'
import Copy from '../Copy'
import Icon from '../Icon'

const linkStyles = {
  color: '#D5DAE1'

}

const activeStyles = {
  color: '#0151A3'
}

const NavItem = ({ children, icon, to }) => {
  const { transactions, setTransactions, showModal, setShowModal, balance, setBalance, isFetching, setIsFetching, moneyIn, moneyOut, finalTotalMoneyIn, finalTotalMoneyOut, categories } = useContext(TransactionContext)

  return (
    <Link to={to} 
    style={linkStyles} 
    activeStyle={activeStyles}
    state={{ transactions, finalTotalMoneyIn, finalTotalMoneyOut, moneyIn, moneyOut, categories }}
   >
      <Icon name={icon}></Icon>
      <Copy fontType="Body2" weight="regular" style>{children}</Copy>
    </Link>
  )
}

NavItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default NavItem
