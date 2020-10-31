import SwiperCore, { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderControl } from 'components'

import { ServicesProps } from '../types'

import * as S from './styles'

import data from './data'

SwiperCore.use([Navigation])

export default function Services({ label, title, categories }: ServicesProps) {
  return (
    <S.Container>
      <S.Heading>
        <S.Label>{label}</S.Label>

        <S.Row>
          <S.Title>{title}</S.Title>

          <S.Menu.List>
            {categories.map((category, index) => (
              <S.Menu.Item key={index}>{category}</S.Menu.Item>
            ))}
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
