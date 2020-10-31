import * as S from './styles'

import { AboutProps } from '../types'

export default function About({ title, description, author }: AboutProps) {
  return (
    <S.Container>
      <S.Picture src="/images/about/banner.jpg" />

      <S.Content>
        <S.Title>{title}</S.Title>

        <S.Description dangerouslySetInnerHTML={{ __html: description }} />

        <S.Author.Wrapper>
          <S.Author.Photo src="/images/about/author.png" />

          <S.Author.Details>
            <S.Author.Name>Denis Shepovalov</S.Author.Name>
            <S.Author.Role>{author.role}</S.Author.Role>
          </S.Author.Details>
        </S.Author.Wrapper>
      </S.Content>
    </S.Container>
  )
}
