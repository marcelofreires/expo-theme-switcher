import React, { createContext, useEffect, useState } from 'react'
import { StatusBar } from 'react-native'

import { colors, typography } from './constants'

export const ThemeContext = createContext({
  toggleTheme: () => {},
  mode: '',
  colors: {},
  typography: {},
})

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setLightTheme] = useState(true)

  const toggleTheme = () => setLightTheme(previousState => !previousState)

  const theme = {
    toggleTheme,
    mode: isLightTheme ? 'light' : 'dark',
    colors: isLightTheme ? colors.light : colors.dark,
    typography,
  }

  useEffect(() => {
    if (isLightTheme) {
      StatusBar.setBarStyle('dark-content')
    } else {
      StatusBar.setBarStyle('light-content')
    }
  }, [isLightTheme])

  return (
    <ThemeContext.Provider value={theme}>
      { children }
    </ThemeContext.Provider>
  )
}
