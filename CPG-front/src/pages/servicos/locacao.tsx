import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './styles.module.scss'

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'swiper/css';

import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Pagination,Navigation]);

export default function Locação() {
  return (
    <Swiper
      
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        "delay": 3000,
        "disableOnInteraction": false
      }}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/clube.jpg" alt="logo" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/clube.jpg" alt="logo" />
      </SwiperSlide>
    </Swiper>
  )
}