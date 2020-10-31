import homepage from 'translations/homepage'
import common from 'translations/common'
import { Locales } from 'translations/types'

import { Home } from 'templates'
import { HomeProps } from 'templates/Home/types'

type Props = {
  content: HomeProps
}

export default function Homepage({ content }: Props) {
  return <Home {...content} />
}

export const getStaticProps = async ({ locale }: { locale: Locales }) => {
  const content = {
    ...homepage[locale],
    layout: common[locale],
  }

  return {
    props: {
      content,
    },
  }
}
