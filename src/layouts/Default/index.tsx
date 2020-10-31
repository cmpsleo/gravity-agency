import { ReactNode } from 'react'

import { Header, Footer } from './component'

type Props = {
  children: ReactNode
}

export default function Default(props: Props) {
  return (
    <>
      <Header />

      {props.children}

      <Footer />
    </>
  )
}
