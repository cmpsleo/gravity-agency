import { Label } from 'components'

import * as S from './styles'

import data from './data'

export default function Clients() {
  return (
    <S.Container>
      <S.Content>
        <S.Heading>
          <S.Title>Our Clients</S.Title>

          <S.Text>
            <Label>We worked with</Label>

            <S.Message>
              Our favorite brands are our friends! We help them to achieve their
              goals, they help us to stay sharp.
            </S.Message>
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
