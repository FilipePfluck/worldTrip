import { Box, Flex, Heading, Text } from '@chakra-ui/react'

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperSlideContent from './SwiperSlide'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export default () => {
  return (
    <Swiper
        style={{height: '100%', width: '100%', marginTop: 32}}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
    >
      <SwiperSlide>
        <SwiperSlideContent background="url(/assets/Europa.png)">
            <Heading>Europa</Heading>
            <Text mt="8" fontSize="24" fontWeight="bold">O continente mais antigo</Text>
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContent background="url(/assets/America.jpg)">
            <Heading>América</Heading>
            <Text mt="8" fontSize="24" fontWeight="bold">O novo mundo</Text>
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContent background="url(/assets/Asia.jpg)">
            <Heading>Ásia</Heading>
            <Text mt="8" fontSize="24" fontWeight="bold">O maior continente</Text>
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContent background="url(/assets/Africa.jpg)">
            <Heading>África</Heading>
            <Text mt="8" fontSize="24" fontWeight="bold">O continente mais antigo</Text>
        </SwiperSlideContent>
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideContent background="url(/assets/Oceania.jpg)">
            <Heading>Oceania</Heading>
            <Text mt="8" fontSize="24" fontWeight="bold">O continente mais recente</Text>
        </SwiperSlideContent>
      </SwiperSlide>
    </Swiper>
  );
};