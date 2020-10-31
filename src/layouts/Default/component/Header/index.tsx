import * as S from './styles'

export default function Header() {
  return (
    <S.Container>
      <S.Logo />

      <S.Action.Button act="search">
        <S.Action.Icon src="/icons/search.svg" />
      </S.Action.Button>

      <S.Action.Button act="menu">
        <S.Action.Icon src="/icons/menu.svg" />
      </S.Action.Button>
    </S.Container>
  )
}
