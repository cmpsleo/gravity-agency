import styled from 'styled-components'
import media from 'styled-media-query'
import { rem, rgba } from 'polished'
import { ReactSVG } from 'react-svg'
import Image from 'next/image'

import { helpers } from 'styles'

export const Container = styled.section`
  ${media.greaterThan('large')`
    display: flex;
  `}
`

export const Picture = styled(Image).attrs(() => ({ unsized: true }))`
  width: 100%;

  ${media.greaterThan('large')`
    width: 44vw;
  `}
`

export const Content = styled.div`
  padding-top: 40px;

  ${media.greaterThan('large')`
    width: 475px;
    margin-left: 90px;
  `}

  ${media.lessThan('large')`
    ${helpers.container.mobile}
  `}
`

export const Title = styled.h1`
  margin-bottom: 30px;
`

export const Description = styled.p`
  font-size: ${rem('18px')};
  color: ${(props) => rgba(props.theme.colors.black, 0.7)};
`

export const Features = styled.div`
  margin-top: 62px;
`

export const Feature = {
  Item: styled.div`
    display: flex;
    align-items: center;

    &:not(:last-of-type) {
      margin-bottom: 30px;
    }
  `,

  Icon: styled(ReactSVG)`
    margin-right: 30px;
  `,

  Text: styled.p`
    font-weight: 500;
    letter-spacing: 4px;
    font-size: ${rem('14px')};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};
  `,
}
