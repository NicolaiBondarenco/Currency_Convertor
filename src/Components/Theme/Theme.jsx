import React from 'react'

const Theme = ({ theme, onChangeTheme }) => {
  const style = theme ? 'theme' : 'theme-dark'
  return (
    <button className={style} onClick={() => onChangeTheme(!theme)}>
      Theme
    </button>
  )
}

export default Theme
