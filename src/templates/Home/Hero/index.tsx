import { Button } from 'components'

import { HeroProps } from '../types'

import * as S from './styles'

export default function Hero({ title, description, button }: HeroProps) {
  return (
    <S.Container>
      <S.Content.Wrapper>
        <S.Content.Box>
          <S.Title>{title}</S.Title>

          <S.Description>{description}</S.Description>

          <Button>{button}</Button>
        </S.Content.Box>
      </S.Content.Wrapper>

      <S.Pictures>
        <S.Picture />
        <S.Video />
      </S.Pictures>
    </S.Container>
  )
}
