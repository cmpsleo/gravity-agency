import styled from 'styled-components'
import media from 'styled-media-query'
import { ReactSVG } from 'react-svg'
import { rgba, rem, darken } from 'polished'

import { Button } from 'components'

import { helpers } from 'styles'

export const Container = styled.footer`
  padding: 70px 0 35px;

  background-color: #515151;
`

export const Content = styled.div`
  ${helpers.container.desktop}
  ${helpers.container.mobile}
`

export const Upper = styled.div`
  padding-bottom: 46px;

  border-bottom: 1px solid ${rgba('#FFF', 0.2)};

  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Logo = styled(ReactSVG).attrs(() => ({
  src: 'images/logo.svg',
}))`
  height: 24px;

  ${media.lessThan('large')`
    margin-bottom: 46px;
  `}

  svg {
    path {
      fill: #fff;
    }
  }
`

export const Menu = {
  Wrapper: styled.nav`
    ${media.lessThan('large')`
      margin-bottom: 46px;
    `}
  `,

  Item: styled.a`
    color: #fff;
    cursor: pointer;
    transition: 0.15s;
    font-size: ${rem('16px')};

    ${media.lessThan('large')`
      display: block;
    `}

    &:hover {
      opacity: 0.6;
      transition: 0.15s;
    }

    &:not(:last-of-type) {
      ${media.greaterThan('large')`
        margin-right: 60px;
      `}

      ${media.lessThan('large')`
        margin-bottom: 30px;
      `}
    }
  `,
}

export const Newsletter = {
  Form: styled.form`
    display: flex;
  `,

  Field: styled.input.attrs(() => ({
    placeholder: 'Your e-mail',
    required: true,
    type: 'email',
  }))`
    all: unset;

    width: 170px;
    padding: 15px 20px;
    margin-right: 15px;

    background-color: #fff;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.black};

    ${media.lessThan('large')`
      flex: 1;
    `}
  `,

  Action: styled(Button)`
    background-color: #c6b393;

    &:hover {
      background-color: ${darken(0.05, '#c6b393')};
    }
  `,
}

export const Below = styled.div`
  padding-top: 36px;

  ${media.greaterThan('large')`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`

export const Links = {
  Wrapper: styled.div`
    ${media.lessThan('large')`
      margin-bottom: 36px;
    `}
  `,

  Item: styled.a`
    cursor: pointer;
    transition: 0.15s;
    font-size: ${rem('13px')};
    color: ${rgba('#FFF', 0.4)};

    ${media.greaterThan('large')`
      font-size: ${rem('16px')};
    `}

    &:hover {
      transition: 0.15s;
      color: ${rgba('#FFF', 0.8)};
    }

    &:not(:last-of-type) {
      margin-right: 20px;

      ${media.greaterThan('large')`
        margin-right: 40px;
      `}
    }
  `,
}

export const Socials = styled.div`
  display: flex;
  align-items: center;
`

export const Social = {
  Item: styled.a.attrs(() => ({ target: '_blank' }))`
    cursor: pointer;

    &:not(:last-of-type) {
      margin-right: 15px;
    }
  `,

  Icon: styled.img`
    opacity: 0.4;
    transition: 0.15s;

    &:hover {
      opacity: 0.8;
      transition: 0.15s;
    }
  `,
}
