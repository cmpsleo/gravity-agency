import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

import { Props } from '.'

export const Container = styled.button<Props>`
  all: unset;

  padding: 18px 20px;

  cursor: pointer;
  transition: 0.15s;
  background-color: #c4c4c4;

  &.swiper-button-disabled {
    cursor: not-allowed;
    background-color: #dadada;

    &:hover {
      background-color: #dadada;
    }
  }

  &:hover {
    transition: 0.15s;
    background-color: #acaaaa;
  }

  &:not(:last-of-type) {
    margin-right: 25px;
  }
`

export const Icon = styled(ReactSVG)``
