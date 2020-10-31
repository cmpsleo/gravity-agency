import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import GlobalStyles from './global'

type Props = {
  children: ReactNode
}

export default function Provider(props: Props) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {props.children}
    </ThemeProvider>
  )
}
