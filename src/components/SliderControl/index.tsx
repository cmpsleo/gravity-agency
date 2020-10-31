import * as S from './styles'

export type Props = {
  direction?: 'left' | 'right'
} & Pick<JSX.IntrinsicElements['button'], 'id'>

const arrows = {
  right: '/icons/chevron-right.svg',
  left: '/icons/chevron-left.svg',
}

export default function SliderControl({ direction = 'right', ...rest }: Props) {
  return (
    <S.Container {...rest}>
      <S.Icon src={arrows[direction]} />
    </S.Container>
  )
}
