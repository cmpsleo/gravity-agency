import * as S from './styles'

export default function Features() {
  return (
    <S.Container>
      <S.Picture src="/images/features.png" />

      <S.Content>
        <S.Title>Well thought with super easy to use</S.Title>

        <S.Description>
          As we approached the palace I could see through the great windows of
          the first floor the brilliantly illuminated audience chamber of Than
          Kosis. The immense hall was crowded with nobles and their women.
        </S.Description>

        <S.Features>
          <S.Feature.Item>
            <S.Feature.Icon src="/icons/100.svg" />

            <S.Feature.Text>Ultimate result</S.Feature.Text>
          </S.Feature.Item>

          <S.Feature.Item>
            <S.Feature.Icon src="/icons/bag.svg" />

            <S.Feature.Text>Minimal design</S.Feature.Text>
          </S.Feature.Item>
        </S.Features>
      </S.Content>
    </S.Container>
  )
}
