import React from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
SwiperCore.use([Navigation, Pagination]);

function Slider() {
  React.useEffect(() => {
     // eslint-disable-next-line
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <div className="swiper-slide slide-3"></div>
        <div className="swiper-slide slide-2"></div>
        <div className="swiper-slide slide-1"></div>
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev prev"></div>
      <div className="swiper-button-next next"></div>
    </div>
  );
}

export default Slider;
