import * as S from './styles'

export default function About() {
  return (
    <S.Container>
      <S.Picture src="/images/about/banner.jpg" />

      <S.Content>
        <S.Title>
          We solve digital problems with an outstanding creative flare
        </S.Title>

        <S.Description>
          The best time to view the moon, obviously, is at night when there are
          few clouds and the weather is accommodating for a long and lasting
          study.
          <br />
          <br />
          For most of us, the idea of astronomy is something we directly connect
          to “stargazing”, telescopes and seeing magnificent displays in the
          heavens.
        </S.Description>

        <S.Author.Wrapper>
          <S.Author.Photo src="/images/about/author.png" />

          <S.Author.Details>
            <S.Author.Name>Denis Shepovalov</S.Author.Name>
            <S.Author.Role>Co-Founder & CEO</S.Author.Role>
          </S.Author.Details>
        </S.Author.Wrapper>
      </S.Content>
    </S.Container>
  )
}
