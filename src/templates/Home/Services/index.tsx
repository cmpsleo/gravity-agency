import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderControl } from 'components'

import * as S from './styles'

import data from './data'

SwiperCore.use([Navigation])

export default function Services() {
  return (
    <S.Container>
      <S.Heading>
        <S.Label>Services</S.Label>

        <S.Row>
          <S.Title>
            We love work hard and explore new things that’s why we cover lot of
            things. Check our service list and view details
          </S.Title>

          <S.Menu.List>
            <S.Menu.Item>Multimedia</S.Menu.Item>
            <S.Menu.Item>Creative strategy</S.Menu.Item>
            <S.Menu.Item>Interactive design</S.Menu.Item>
            <S.Menu.Item>UI/UX</S.Menu.Item>
            <S.Menu.Item>Packaging</S.Menu.Item>
            <S.Menu.Item>Coding</S.Menu.Item>
            <S.Menu.Item>Branding</S.Menu.Item>
          </S.Menu.List>
        </S.Row>
      </S.Heading>

      <S.Slides>
        <Swiper
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          navigation={{
            prevEl: '#services-prev',
            nextEl: '#services-next',
          }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <S.Item src={item.src} />
            </SwiperSlide>
          ))}
        </Swiper>

        <S.Controls>
          <SliderControl id="services-prev" direction="left" />
          <SliderControl id="services-next" direction="right" />
        </S.Controls>
      </S.Slides>
    </S.Container>
  )
}
