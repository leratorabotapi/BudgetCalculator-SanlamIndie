import React from 'react'
import PropTypes from 'prop-types'

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
      {formattedAmount}
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
