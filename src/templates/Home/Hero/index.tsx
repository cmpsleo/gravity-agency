import { Button } from 'components'

import * as S from './styles'

export default function Hero() {
  return (
    <S.Container>
      <S.Content.Wrapper>
        <S.Content.Box>
          <S.Title>Work around you and your team</S.Title>

          <S.Description>
            From ads that dance or sing to MTV-like commercials, online
            advertisers are now using a new type of technology “rich media” to
            attract consumers.
          </S.Description>

          <Button>Get started</Button>
        </S.Content.Box>
      </S.Content.Wrapper>

      <S.Pictures>
        <S.Picture />
        <S.Video />
      </S.Pictures>
    </S.Container>
  )
}
