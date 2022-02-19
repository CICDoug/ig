import styles from './styles.module.scss';
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface CarrouselProps {
  content: Array<dataProps>;
}
interface dataProps {
  indice: number;
  image_url: string;
  title: string;
}




export function News(props: CarrouselProps) {

  return (

    <div className={styles.section}>
      <Swiper

        modules={[Navigation, Pagination, A11y]}
        spaceBetween={0}
        slidesPerView={2}
        navigation

        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >

        {props.content.map((item, indice) => {
          return (
            <SwiperSlide className={styles.cardSlide} key={indice}>

              <div className={styles.cardsContainer}>
                <img className={styles.slideImg} src={item.image_url} />
                <span className={styles.textNews}>{item.title}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div >

  );
};

