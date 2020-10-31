import styled from 'styled-components'
import media from 'styled-media-query'
import { rgba, rem } from 'polished'

import { helpers } from 'styles'

import { Label as LabelComponent } from 'components'

export const Container = styled.section`
  padding-bottom: 80px;

  ${media.greaterThan('large')`
    padding-bottom: 180px;
  `}
`

export const Heading = styled.div`
  ${helpers.container.desktop}
  ${helpers.container.mobile}

  padding-bottom: 50px;

  ${media.greaterThan('large')`
    padding-bottom: 100px;
  `}
`

export const Label = styled(LabelComponent)`
  margin-bottom: 40px;
  display: block;
`

export const Row = styled.div`
  ${media.greaterThan('large')`
    display: flex;
    justify-content: space-between;
  `}
`

export const Title = styled.h1`
  ${media.greaterThan('large')`
    padding-right: 160px;
  `}

  ${media.lessThan('large')`
    padding-bottom: 80px;
  `}
`

export const Menu = {
  List: styled.div`
    column-count: 2;
  `,

  Item: styled.button`
    all: unset;

    width: 100%;
    margin-bottom: 20px;

    cursor: pointer;
    transition: 0.15s;
    font-size: ${rem('18px')};
    color: ${(props) => rgba(props.theme.colors.black, 0.7)};

    &:hover {
      transition: 0.15s;
      color: ${(props) => props.theme.colors.black};
    }
  `,
}

export const Slides = styled.div`
  .swiper-slide {
    width: 70vw;

    opacity: 0.3;

    ${media.greaterThan('large')`
      width: 60vw;
    `}
  }

  .swiper-slide-active {
    opacity: 1;
  }
`

export const Item = styled.img`
  width: 100%;

  cursor: pointer;
`

export const Controls = styled.div`
  ${helpers.container.desktop}
  ${helpers.container.mobile}

  margin-top: 50px;
`
