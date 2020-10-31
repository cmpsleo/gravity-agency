import styled from 'styled-components'
import media from 'styled-media-query'
import { rgba, rem } from 'polished'

import { helpers } from 'styles'

export const Container = styled.section`
  padding-bottom: 90px;

  ${media.greaterThan('large')`
    padding-bottom: 180px;
  `}
`

export const Slides = styled.div`
  ${helpers.container.desktop}
  ${helpers.container.mobile}
`

export const Item = styled.div`
  ${media.greaterThan('large')`
    display: flex;
    justify-content: space-between;
  `}
`

export const Content = styled.div`
  ${media.greaterThan('large')`
    width: 540px;
  `}
`

export const Title = styled.h1`
  padding: 70px 0 80px;

  ${media.greaterThan('large')`
    padding: 70px 0 120px;
  `}
`

export const Client = {
  Wrapper: styled.div``,

  Name: styled.span`
    margin-bottom: 12px;
    display: block;

    font-weight: 600;
    font-size: ${rem('22px')};
    color: ${(props) => props.theme.colors.black};
  `,

  Role: styled.span`
    display: block;

    font-size: ${rem('18px')};
    color: ${(props) => rgba(props.theme.colors.black, 0.7)};
  `,
}

export const Photo = styled.img`
  width: 100px;
  height: 140px;

  object-fit: cover;

  ${media.greaterThan('large')`
    width: 440px;
    height: 620px;
  `}

  ${media.lessThan('large')`
    margin-top: 40px;
  `}
`

export const Controls = styled.div`
  position: relative;
  z-index: 10;

  margin-top: 54px;

  ${media.greaterThan('large')`
    margin-top: -54px;
  `}
`
