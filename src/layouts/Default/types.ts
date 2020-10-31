export type FooterProps = {
  menu: Array<{
    link: string
    title: string
  }>
  newsletter: {
    placeholder: string
    button: string
  }
  externalMenu: Array<{
    link: string
    title: string
  }>
}

export type LayoutsDefaultProps = {
  footer: FooterProps
}
