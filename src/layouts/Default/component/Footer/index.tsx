import Link from 'next/link'

import { FooterProps } from '../../types'

import * as S from './styles'

import * as data from './data'

export default function Footer({
  menu,
  newsletter,
  externalMenu,
}: FooterProps) {
  return (
    <S.Container>
      <S.Content>
        <S.Upper>
          <S.Logo />

          <S.Menu.Wrapper>
            {menu.map((item, index) => (
              <Link key={index} href={item.link}>
                <S.Menu.Item>{item.title}</S.Menu.Item>
              </Link>
            ))}
          </S.Menu.Wrapper>

          <S.Newsletter.Form>
            <S.Newsletter.Field placeholder={newsletter?.placeholder} />
            <S.Newsletter.Action>{newsletter?.button}</S.Newsletter.Action>
          </S.Newsletter.Form>
        </S.Upper>

        <S.Below>
          <S.Links.Wrapper>
            {externalMenu.map((item, index) => (
              <Link key={index} href={item.link}>
                <S.Links.Item>{item.title}</S.Links.Item>
              </Link>
            ))}
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
