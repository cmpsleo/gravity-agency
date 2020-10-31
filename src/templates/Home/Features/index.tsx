import { FeaturesProps } from '../types'

import * as S from './styles'

export default function Features({ title, description, items }: FeaturesProps) {
  return (
    <S.Container>
      <S.Picture src="/images/features.png" />

      <S.Content>
        <S.Title>{title}</S.Title>

        <S.Description>{description}</S.Description>

        <S.Features>
          {items.map((item, index) => (
            <S.Feature.Item key={index}>
              <S.Feature.Icon src={item.icon} />

              <S.Feature.Text>{item.title}</S.Feature.Text>
            </S.Feature.Item>
          ))}
        </S.Features>
      </S.Content>
    </S.Container>
  )
}
