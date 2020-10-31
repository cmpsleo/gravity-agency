import { ReactNode } from 'react'

import { Header, Footer } from './component'

import { LayoutsDefaultProps } from './types'

type Props = {
  children: ReactNode
} & LayoutsDefaultProps

export default function Default({ children, footer }: Props) {
  return (
    <>
      <Header />

      {children}

      <Footer {...footer} />
    </>
  )
}
