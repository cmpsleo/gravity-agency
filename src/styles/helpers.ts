import { css } from 'styled-components'
import media from 'styled-media-query'

export const container = {
  desktop: css`
    ${media.greaterThan('large')`
      width: 1100px;
      margin-left: auto;
      margin-right: auto;
    `}
  `,

  mobile: css`
    ${media.lessThan('large')`
      margin-left: 40px;
      margin-right: 40px;
    `}
  `,
}
