import { LayoutDefault } from 'layouts'

import { Home } from 'templates'

const { Hero, About, Services, Features, Works, Testimonials, Clients } = Home

export default function Homepage() {
  return (
    <LayoutDefault>
      <main>
        <Hero />
        <About />
        <Services />
        <Features />
        <Works />
        <Testimonials />
        <Clients />
      </main>
    </LayoutDefault>
  )
}
