import { LayoutsDefaultProps } from 'layouts/Default/types'

export type HeroProps = {
  title: string
  description: string
  button: string
}

export type AboutProps = {
  title: string
  description: string
  author: {
    role: string
  }
}

export type ServicesProps = {
  label: string
  title: string
  categories: string[]
}

export type FeaturesProps = {
  title: string
  description: string
  items: Array<{
    title: string
    icon: string
  }>
}

export type WorksProps = {
  label: string
  title: string
  categories: string[]
  footer: {
    text: string
    button: string
  }
}

export type TestimonialsProps = {
  label: string
  items: Array<{
    text: string
    name: string
    role: string
    photo: string
  }>
}

export type ClientsProps = {
  title: string
  label: string
  description: string
}

export type HomeProps = {
  layout: LayoutsDefaultProps
  hero: HeroProps
  about: AboutProps
  services: ServicesProps
  features: FeaturesProps
  works: WorksProps
  testimonials: TestimonialsProps
  clients: ClientsProps
}
