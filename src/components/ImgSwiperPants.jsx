import React, { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../App.css';

import Img1 from '../img/pants/aozoraya-sp_10142639.png';
import Img2 from '../img/pants/aozoraya-sp_10142639.png';
import Img3 from '../img/pants/aozoraya-sp_10142639.png';
import Img4 from '../img/chitosesports-b_10016758.png';



SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


function Imgswiperpants() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <BrowserRouter>
      <div className="coordTops">
       <img src={Img4} alt="" className="wearImg" />
      </div>

      <Swiper id="controller2" onSwiper={setControlledSwiper}
      slidesPerView={3}
      >
        <SwiperSlide key='1' tag="li" className="wearLi">
        <img
          src={Img1}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='1' tag="li" className="wearLi">
        <img
          src={Img1}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='2' tag="li" className="wearLi">
        <img
          src={Img2}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='3' tag="li" className="wearLi">
        <img
          src={Img3}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='1' tag="li" className="wearLi">
        <img
          src={Img1}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='2' tag="li" className="wearLi">
        <img
          src={Img2}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='3' tag="li" className="wearLi">
        <img
          src={Img3}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
      </Swiper>
    </BrowserRouter>
  );
}

export default Imgswiperpants
