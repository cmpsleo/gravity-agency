import { useState } from 'react'

import { Button, Label } from 'components'

import { WorksProps } from '../types'

import * as S from './styles'

import data from './data'

export default function Works({
  label,
  title,
  categories,
  footer,
}: WorksProps) {
  const [active, setActive] = useState<string>(categories[0])

  return (
    <S.Container>
      <Label>{label}</Label>

      <S.Heading>
        <S.Title>{title}</S.Title>

        <S.Categories.List>
          {categories.map((category, index) => (
            <S.Categories.Item
              key={index}
              active={category === active}
              onClick={() => setActive(category)}
            >
              {category}
            </S.Categories.Item>
          ))}
        </S.Categories.List>
      </S.Heading>

      <S.Listing>
        {data.map((item, index) => (
          <S.Work.Item key={index}>
            <S.Work.Image src={item.image} />
          </S.Work.Item>
        ))}
      </S.Listing>

      <S.Footer>
        <S.Message>{footer.text}</S.Message>

        <Button>{footer.button}</Button>
      </S.Footer>
    </S.Container>
  )
}
