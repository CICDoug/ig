import styles from './styles.module.scss'
import React  from "react";
import BoxCenter from '../BoxCenter';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import SwiperCore, {Autoplay,EffectFade,Navigation,Pagination} from 'swiper';

SwiperCore.use([Autoplay, EffectFade,Navigation,Pagination]);


  function SlideContainer() {
    return (
            
        <div className={styles.Carrossel}>  
        

     <Swiper spaceBetween={50} speed={3500} effect={'fade'} navigation={true} loop={true} autoplay={{"delay": 3000, "disableOnInteraction": false}} pagination={{
     "clickable": true}}>

  <SwiperSlide>

    <button>

  <BoxCenter name="Associe-se" />

</button>
  <img className={styles.associe} src="Assets/associe.png" alt="Associe-se ao clube" />

    
    </SwiperSlide>

    <SwiperSlide>
      
    <button>
    <BoxCenter name="Tour 360°" />
    </button>

      <img className={styles.tour} src="Assets/tour.png" alt="Tour 360°" />

          
      </SwiperSlide>
      
  </Swiper>
  </div>
  )
}
 
export default SlideContainer;
