import { createGlobalStyle } from 'styled-components'
import { rem } from 'polished'

import reset from './reset'

export default createGlobalStyle`
  ${reset}

  body {
    background-color: #F4F4F4;
    font-family: 'Fira Sans', sans-serif;
  }

  h1 {
    font-weight: 600;
    letter-spacing: -1px;
    font-size: ${rem('40px')};
    color: ${(props) => props.theme.colors.black};
  }
`
