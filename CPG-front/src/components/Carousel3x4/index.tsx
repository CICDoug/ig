import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import styles from "./styles.module.scss";

import SwiperCore, { EffectFade,Pagination,Navigation} from 'swiper';

SwiperCore.use([EffectFade,Pagination,Navigation]);

function Carousel3x4 (props){
    return (
        <>
        <div className= {styles.Carousel3x4}>
            
        {props.caption}

            <Swiper slidesPerView={3} spaceBetween={20} slidesPerGroup={3} loop={true} effect={'fade'}
             pagination={{ "clickable": true}} navigation={true} className={styles.Swiper3x4}>
                

            <SwiperSlide className={styles.Left} >

                <img src="/Assets/quadratenis.svg" alt="Quadra de tênis do clube"/> 

            </SwiperSlide>

            
            <SwiperSlide className={styles.Center}>

            <img src="/Assets/playground.svg" alt="Playground"/> 

            </SwiperSlide>
            
            <SwiperSlide className={styles.Right} >

            <img src="/Assets/biblioteca.svg" alt="Biblioteca"/> 

            </SwiperSlide>
            
            <SwiperSlide className={styles.Left} >
                
            <img src="/Assets/sinuca.svg" alt="Sinuca"/> 

            </SwiperSlide>
            
            <SwiperSlide className={styles.Center}>
                
            <img src="/Assets/piscinaexterna.svg" alt="Piscina externa do clube"/> 

            </SwiperSlide>
            
            <SwiperSlide className={styles.Right} >
                
            <img src="/Assets/piscinatermica.svg" alt="Piscina térmica"/> 

            </SwiperSlide>
            
            <SwiperSlide className={styles.Left}>
                
            <img src="/Assets/churrasqueira7.svg" alt="Churrasqueira"/> 

            </SwiperSlide>
            
            <SwiperSlide className={styles.Center}>
                
            <img src="/Assets/churrasqueira8.svg" alt="Churrasqueira"/> 

            </SwiperSlide>
            
            <SwiperSlide className={styles.Right}>
                
            <img src="/Assets/churrasqueira9.svg" alt="Churrasqueira"/> 

            </SwiperSlide>

            <SwiperSlide className={styles.Left}>
                
            <img src="/Assets/churras10.svg" alt="Churrasqueira"/> 

            </SwiperSlide>

            <SwiperSlide className={styles.Center}>

            <img src="/Assets/churras11.svg" alt="Churrasqueira"/> 

            </SwiperSlide>

            <SwiperSlide className={styles.Right}>
                
            <img src="/Assets/churras12.svg" alt="Churrasqueira"/> 

            </SwiperSlide>

  </Swiper>


        </div>
       
        </>
    )
}

export default Carousel3x4;