import { useTheme } from './useTheme'

export const useThemedStyles = (styles) => {
 const theme = useTheme()

 return styles(theme)
}
