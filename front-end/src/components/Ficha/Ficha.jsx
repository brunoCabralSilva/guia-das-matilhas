import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';

import Atributos from './Atributos';
import Habilidades from './Habilidades';
import Forms from './Forms';
import OutrasCaracteristicas from './OutrasCaracteristicas';
import Desvantagens from './Desvantagens';
import Ataque from './Ataque';
import Equipamento from './Equipamento';
import Experiencia from './Experiencia';

export default function Ficha() {
  useState(() => {
    const classSwiper = document.getElementsByClassName('swiper-slide');
    for(let i = 0; i < classSwiper.length; i += 1) {
      classSwiper[i].style.maxWidth = '100%';
      console.log(classSwiper[i]);
    }
  }, []);
  return (
    <form className="">
      <Swiper
        className="h-screen"
        loop={true}
        modules={[Navigation, Pagination]}
        navigation={true}
        paginagion={{clickable:true}}
        slidesPerView={1}
      >
        <SwiperSlide className="relative">
          <div className="absolute w-full h-screen bg-light-transp z-10" />
          <Atributos />
          <Habilidades />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute w-full h-screen bg-light-transp z-10" />
          <OutrasCaracteristicas />
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute w-full h-screen bg-light-transp z-10" />
          <div className="px-20 pt-10">
            <Desvantagens />
            <Ataque />
            <Equipamento />
            <Experiencia />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div className="absolute w-full h-screen bg-light-transp z-10" />
          <Forms />
        </SwiperSlide>
      </Swiper>
      <button
        className="px-6 py-3 bg-black text-white m-4"
      >
        Salvar
      </button>
    </form>
  );
}