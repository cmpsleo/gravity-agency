import styled from 'styled-components'
import media from 'styled-media-query'
import { rgba, size, rem } from 'polished'

import { helpers } from 'styles'

export const Container = styled.section`
  ${media.greaterThan('large')`
    ${helpers.container.desktop}
    
    padding: 140px 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}

  ${media.lessThan('large')`
    padding: 70px 0;
  `}
`

export const Picture = styled.img`
  height: 460px;

  ${media.greaterThan('large')`
    height: 560px;
  `}
`

export const Content = styled.article`
  ${media.greaterThan('large')`
    width: 540px;
  `}

  ${media.lessThan('large')`
    margin: 40px 40px 0;
  `}
`

export const Title = styled.h1`
  margin-bottom: 30px;
`

export const Description = styled.p`
  color: ${(props) => rgba(props.theme.colors.black, 0.7)};
`

export const Author = {
  Wrapper: styled.div`
    margin-top: 60px;

    display: flex;
    align-items: center;
  `,

  Photo: styled.img`
    ${size('65px')}
  `,

  Details: styled.p`
    margin-left: 30px;
  `,

  Name: styled.span`
    margin-bottom: 6px;
    display: block;

    font-weight: 500;
    font-size: ${rem('22px')};
    color: ${(props) => props.theme.colors.black};
  `,

  Role: styled.span`
    display: block;

    font-size: ${rem('18px')};
    color: ${(props) => rgba(props.theme.colors.black, 0.7)};
  `,
}
