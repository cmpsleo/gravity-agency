import styled from 'styled-components'
import { rem, rgba } from 'polished'

type Props = JSX.IntrinsicElements['p']

export default styled.p<Props>`
  font-weight: 500;
  letter-spacing: 4px;
  font-size: ${rem('14px')};
  text-transform: uppercase;
  color: ${(props) => rgba(props.theme.colors.black, 0.7)};

  &:before {
    content: '— ';
  }
`
