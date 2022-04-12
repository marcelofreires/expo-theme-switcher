import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { useTheme, useThemedStyles } from '../../theme/hooks'
import { styles } from './styles'

export const Main = () => {
  const theme = useTheme()
  const style = useThemedStyles(styles)

  return (
    <View style={style.container}>
      <Text style={style.title}>This is the {theme.mode} mode</Text>
      <TouchableOpacity
        style={style.button}
        onPress={theme.toggleTheme}
      >
        <Text style={style.buttonLabel}>Switch theme</Text>
      </TouchableOpacity>
    </View>
  )
}
