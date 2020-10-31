import styled from 'styled-components'
import { rem, darken } from 'polished'

type Props = JSX.IntrinsicElements['button']

export default styled.button<Props>`
  all: unset;

  padding: 16px 32px;

  color: #fff;
  cursor: pointer;
  font-weight: 500;
  transition: 0.15s;
  letter-spacing: 4px;
  white-space: nowrap;
  font-size: ${rem('14px')};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.primary};

  &:hover {
    transition: 0.15s;
    background-color: ${(props) => darken(0.05, props.theme.colors.primary)};
  }
`
