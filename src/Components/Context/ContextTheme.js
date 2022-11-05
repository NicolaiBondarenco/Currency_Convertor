import { createContext, useState } from 'react'

export const ContextTheme = createContext()

export const ThemeChange = ({ children }) => {
  const [theme, setTheme] = useState(true)

  const onChangeTheme = (value) => {
    setTheme(value)
  }

  return (
    <ContextTheme.Provider value={{ theme, onChangeTheme }}>
      {children}
    </ContextTheme.Provider>
  )
}
