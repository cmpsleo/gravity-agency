import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { ReactSVG } from 'react-svg'

import { helpers } from 'styles'

type ActionProps = {
  act: 'search' | 'menu'
}

export const Container = styled.header`
  ${helpers.container.desktop}
  ${helpers.container.mobile}

  padding: 60px 0;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ${media.greaterThan('huge')`
    width: 1430px;
  `}
`

export const Logo = styled(ReactSVG).attrs(() => ({
  src: '/images/logo.svg',
}))`
  height: 24px;
`

export const Action = {
  Button: styled.button<ActionProps>`
    all: unset;

    cursor: pointer;
    transition: 0.15s;

    ${(props) =>
      props.act &&
      {
        search: css`
          justify-self: center;
        `,

        menu: css`
          justify-self: right;
        `,
      }[props.act]}

    &:hover {
      opacity: 0.5;
      transition: 0.15s;
    }
  `,

  Icon: styled.img``,
}
