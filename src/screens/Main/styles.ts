import { StyleSheet } from 'react-native'
import { Theme } from '../../theme/types'

export const styles = (theme: Theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: theme.typography.size.MEDIUM,
    color: theme.colors.TEXT,
    marginBottom: 24,
  },
  button: {
    backgroundColor: theme.colors.BUTTON_BACKGROUND,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.colors.BUTTON_BORDER_COLOR,
    minHeight: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: theme.colors.BUTTON_TEXT_COLOR,
    fontSize: theme.typography.size.SMALL,
  },
})
