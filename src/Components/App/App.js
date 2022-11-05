import React, { useState, useEffect, useRef, useContext } from 'react'
import { Block } from '../Block/Block'
import Theme from '../Theme/Theme'
import { ContextTheme } from '../Context/ContextTheme'
import '../../../src/index.scss'

function App() {
  const ratesRef = useRef({})
  const [fromCurrency, setFromCurrency] = useState('RUB')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromValue, setFromValue] = useState(0)
  const [toValue, setToValue] = useState(0)
  const { theme, onChangeTheme } = useContext(ContextTheme)

  const allWind = document.querySelector('body')
  if (!theme) {
    allWind.classList.add('dark')
  } else {
    allWind.classList.remove('dark')
  }

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        onChangeToValue(1)
        ratesRef.current = json.rates
      })
  }, [])

  useEffect(() => {
    onChangeFromValue(fromValue)
  }, [fromCurrency])

  useEffect(() => {
    onChangeToValue(toValue)
  }, [toCurrency])

  const onChangeFromCurrency = (cur) => {
    setFromCurrency(cur)
  }

  const onChangeToCurrency = (cur) => {
    setToCurrency(cur)
  }

  const onChangeFromValue = (value) => {
    const result =
      (ratesRef.current[toCurrency] / ratesRef.current[fromCurrency]) * value
    setToValue(result.toFixed(3))
    setFromValue(value)
  }

  const onChangeToValue = (value) => {
    const result =
      (ratesRef.current[fromCurrency] / ratesRef.current[toCurrency]) * value
    setFromValue(result.toFixed(3))
    setToValue(value)
  }

  return (
    <div className="App">
      <Theme theme={theme} onChangeTheme={onChangeTheme} />
      <div className={`container ${theme ? '' : 'dark'}`}>
        <Block
          value={fromValue}
          currency={fromCurrency}
          onChangeCurrency={onChangeFromCurrency}
          onChangeValue={onChangeFromValue}
        />
        <Block
          value={toValue}
          currency={toCurrency}
          onChangeCurrency={onChangeToCurrency}
          onChangeValue={onChangeToValue}
        />
      </div>
    </div>
  )
}

export default App
