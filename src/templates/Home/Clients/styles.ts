import styled from 'styled-components'
import media from 'styled-media-query'
import { rgba, rem } from 'polished'

import { helpers } from 'styles'

export const Container = styled.section`
  padding: 100px 0;

  background-color: #fff;
`

export const Content = styled.div`
  ${helpers.container.desktop}
  ${helpers.container.mobile}
`

export const Heading = styled.div`
  padding-bottom: 80px;

  ${media.greaterThan('large')`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  `}
`

export const Title = styled.h1``

export const Text = styled.div`
  padding-top: 20px;

  ${media.greaterThan('large')`
    width: 440px;
  `}
`

export const Message = styled.p`
  margin-top: 16px;

  font-size: ${rem('18px')};
  color: ${(props) => rgba(props.theme.colors.black, 0.7)};
`

export const Listing = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Client = {
  Item: styled.a`
    opacity: 0.15;
    transition: 0.15s;

    &:hover {
      opacity: 1;
      transition: 0.15s;
    }
  `,

  Logo: styled.img`
    max-width: 70px;
    max-height: 30px;

    ${media.greaterThan('large')`
      max-width: 140px;
      max-height: 60px;
    `}
  `,
}
