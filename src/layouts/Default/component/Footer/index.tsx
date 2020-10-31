import * as S from './styles'

import * as data from './data'

export default function Footer() {
  return (
    <S.Container>
      <S.Content>
        <S.Upper>
          <S.Logo />

          <S.Menu.Wrapper>
            <S.Menu.Item>Travel</S.Menu.Item>
            <S.Menu.Item>Explore</S.Menu.Item>
            <S.Menu.Item>Works</S.Menu.Item>
            <S.Menu.Item>About Us</S.Menu.Item>
            <S.Menu.Item>Contacts</S.Menu.Item>
          </S.Menu.Wrapper>

          <S.Newsletter.Form>
            <S.Newsletter.Field />
            <S.Newsletter.Action>Send</S.Newsletter.Action>
          </S.Newsletter.Form>
        </S.Upper>

        <S.Below>
          <S.Links.Wrapper>
            <S.Links.Item>Terms</S.Links.Item>
            <S.Links.Item>Promo</S.Links.Item>
            <S.Links.Item>Download</S.Links.Item>
            <S.Links.Item>News</S.Links.Item>
          </S.Links.Wrapper>

          <S.Socials>
            {data.socials.map((item, index) => (
              <S.Social.Item key={index} href={item.url}>
                <S.Social.Icon src={item.icon} />
              </S.Social.Item>
            ))}
          </S.Socials>
        </S.Below>
      </S.Content>
    </S.Container>
  )
}
