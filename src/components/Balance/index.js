import React from 'react'
import PropTypes from 'prop-types'
import Copy from '../Copy'

const Balance = ({ amount, size, add, currency, color }) => {

  let balanceColor
  switch (color) {
    case 'red':
      balanceColor = '#E54A2D'
      break
    case 'white':
      balanceColor = '#FFFFFF'
      break
    case 'grey':
      balanceColor = '#BDBDBD'
      break

    default:
      break
  }

  const formattedAmount = new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency,
  }).format(amount)

  return (
    <div
      className={`balance-${size}`}
      style={{
        color: `${balanceColor}`
      }}
    >
      <Copy fontType="Body1">{formattedAmount}</Copy> 
    </div>
  )
}

Balance.propTypes = {
  amount: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['small', 'large']),
  currency: PropTypes.string
}

Balance.defaultProps = {
  size: 'small',
  currency: 'ZAR'
}

export default Balance
