import Hero from './Hero'
import About from './About'
import Services from './Services'
import Features from './Features'
import Works from './Works'
import Testimonials from './Testimonials'
import Clients from './Clients'

import { LayoutDefault } from 'layouts'

import { HomeProps } from './types'

export default function Homepage({
  layout,
  hero,
  about,
  services,
  features,
  works,
  testimonials,
  clients,
}: HomeProps) {
  return (
    <LayoutDefault {...layout}>
      <main>
        <Hero {...hero} />
        <About {...about} />
        <Services {...services} />
        <Features {...features} />
        <Works {...works} />
        <Testimonials {...testimonials} />
        <Clients {...clients} />
      </main>
    </LayoutDefault>
  )
}
