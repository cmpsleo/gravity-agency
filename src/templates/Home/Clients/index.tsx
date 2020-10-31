import { Label } from 'components'

import { ClientsProps } from '../types'

import * as S from './styles'

import data from './data'

export default function Clients({ title, label, description }: ClientsProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Heading>
          <S.Title>{title}</S.Title>

          <S.Text>
            <Label>{label}</Label>

            <S.Message>{description}</S.Message>
          </S.Text>
        </S.Heading>

        <S.Listing>
          {data.map((item, index) => (
            <S.Client.Item key={index} href={item.url} target="_blank">
              <S.Client.Logo src={item.logo} />
            </S.Client.Item>
          ))}
        </S.Listing>
      </S.Content>
    </S.Container>
  )
}
