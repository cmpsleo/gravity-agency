import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { rem, rgba } from 'polished'
import Image from 'next/image'

import { helpers } from 'styles'

type CategoriesProps = {
  active?: boolean
}

export const Container = styled.section`
  ${helpers.container.desktop}
  ${helpers.container.mobile}

  padding: 100px 0;

  ${media.greaterThan('large')`
    padding: 200px 0;
  `}
`

export const Heading = styled.div`
  margin-top: 40px;
  margin-bottom: 55px;

  ${media.greaterThan('large')`
    margin-bottom: 110px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Title = styled.h1``

export const Categories = {
  List: styled.div`
    ${media.lessThan('large')`
      margin-top: 40px;
    `}
  `,

  Item: styled.button<CategoriesProps>`
    all: unset;

    cursor: pointer;
    font-weight: 500;
    transition: 0.15s;
    letter-spacing: 4px;
    font-size: ${rem('14px')};
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.black};

    &:not(:last-of-type) {
      margin-right: 24px;
    }

    &:hover {
      transition: 0.15s;
      color: ${(props) => props.theme.colors.primary};
    }

    ${media.lessThan('large')`
      margin-bottom: 16px;
    `}

    ${(props) =>
      props.active &&
      css`
        color: ${(props) => props.theme.colors.primary};
      `}
  `,
}

export const Listing = styled.div`
  display: grid;
  grid-gap: 3px;
  grid-template-columns: repeat(2, 1fr);

  ${media.greaterThan('large')`
    grid-gap: 30px;
    grid-template-columns: repeat(3, 1fr);
  `}
`

export const Work = {
  Item: styled.div`
    all: unset;

    cursor: pointer;
    transition: transform 0.8s cubic-bezier(0.85, 0, 0.15, 1);

    &:hover {
      transform: translateY(-20px);

      box-shadow: -30px 80px 150px ${rgba('#000', 0.25)};
      transition: transform 0.4s cubic-bezier(0.85, 0, 0.15, 1);
    }
  `,

  Image: styled(Image).attrs(() => ({ unsized: true }))`
    width: 100%;
  `,
}

export const Footer = styled.div`
  margin-top: 52px;

  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Message = styled.p`
  font-size: ${rem('18px')};
  color: ${(props) => rgba(props.theme.colors.black, 0.7)};

  ${media.greaterThan('large')`
    padding-right: 150px;
  `}

  ${media.lessThan('large')`
    padding-bottom: 40px;
  `}
`
