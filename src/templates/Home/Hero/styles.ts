import styled from 'styled-components'
import media from 'styled-media-query'
import { rem, rgba } from 'polished'
import { helpers } from 'styles'
import Image from 'next/image'

export const Container = styled.section`
  ${helpers.container.mobile}

  ${media.greaterThan('large')`
    display: flex;
  `}
`

export const Content = {
  Wrapper: styled.div`
    ${media.greaterThan('large')`
      padding-top: 60px;

      flex: 1;
    `}
  `,

  Box: styled.div`
    ${media.greaterThan('large')`
      width: 470px;
      margin: 0 auto;
    `}
  `,
}

export const Title = styled.h1`
  padding-bottom: 30px;

  color: #151515;
  font-weight: bold;
  font-size: ${rem('60px')};
`

export const Description = styled.p`
  padding-bottom: 56px;

  font-size: ${rem('18px')};
  color: ${(props) => rgba(props.theme.colors.black, 0.7)};
`

export const Pictures = styled.figure`
  position: relative;

  flex: 1;

  ${media.lessThan('large')`
    display: none;
  `}
`

export const Picture = styled(Image).attrs(() => ({
  src: '/images/hero/1.jpg',
  unsized: true,
}))`
  width: 100%;
  height: calc(100vh - 144px);
`

export const Video = styled(Image).attrs(() => ({
  src: '/images/hero/2.jpg',
  unsized: true,
}))`
  position: absolute;
  bottom: 10vh;
  left: -10vw;

  width: 20vw;
  height: auto;

  box-shadow: -20px 60px 150px ${rgba('#000', 0.44)};
`
