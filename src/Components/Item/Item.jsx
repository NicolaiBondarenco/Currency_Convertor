import React from 'react'

const Item = (props) => {
  const { currency, cur, onChangeCurrency } = props
  return (
    <li
      onClick={() => onChangeCurrency(cur)}
      className={currency === cur ? 'active' : ''}
    >
      <button>{cur}</button>
    </li>
  )
}

export default Item
