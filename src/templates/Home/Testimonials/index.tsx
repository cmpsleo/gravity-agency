import SwiperCore, { Navigation, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SliderControl } from 'components'

import * as S from './styles'

import { Label } from 'components'

import data from './data'

SwiperCore.use([Navigation, EffectFade])

export default function Testimonials() {
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
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <S.Item>
                <S.Content>
                  <Label>Testimonials</Label>

                  <S.Title>{item.text}</S.Title>

                  <S.Client.Wrapper>
                    <S.Client.Name>{item.client.name}</S.Client.Name>
                    <S.Client.Role>{item.client.role}</S.Client.Role>
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
