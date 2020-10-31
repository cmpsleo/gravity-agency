import { Button } from 'components'

import { Label } from 'components'

import * as S from './styles'

import data from './data'

export default function Works() {
  return (
    <S.Container>
      <Label>Our works</Label>

      <S.Heading>
        <S.Title>Discover our Work</S.Title>

        <S.Categories.List>
          <S.Categories.Item active>All</S.Categories.Item>
          <S.Categories.Item>Branding</S.Categories.Item>
          <S.Categories.Item>Web</S.Categories.Item>
          <S.Categories.Item>Development</S.Categories.Item>
          <S.Categories.Item>Films</S.Categories.Item>
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
        <S.Message>
          It picks up the words on the page and displays ads that are similar to
          those words. Then when someone either performs an action or clicks on
          your page you will get paid.
        </S.Message>

        <Button>See our works</Button>
      </S.Footer>
    </S.Container>
  )
}
