import SwiperCore, { Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderControl } from 'components'

import { TestimonialsProps } from '../types'

import * as S from './styles'

import { Label } from 'components'

SwiperCore.use([Navigation, EffectFade])

export default function Testimonials({ label, items }: TestimonialsProps) {
  return (
    <S.Container>
      <S.Slides>
        <Swiper
          slidesPerView={1}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          navigation={{
            prevEl: '#testimonials-left',
            nextEl: '#testimonials-right',
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <S.Item>
                <S.Content>
                  <Label>{label}</Label>

                  <S.Title>{item.text}</S.Title>

                  <S.Client.Wrapper>
                    <S.Client.Name>{item.name}</S.Client.Name>
                    <S.Client.Role>{item.role}</S.Client.Role>
                  </S.Client.Wrapper>
                </S.Content>

                <S.Photo src={item.photo} />
              </S.Item>
            </SwiperSlide>
          ))}
        </Swiper>

        <S.Controls>
          <SliderControl id="testimonials-left" direction="left" />
          <SliderControl id="testimonials-right" direction="right" />
        </S.Controls>
      </S.Slides>
    </S.Container>
  )
}
