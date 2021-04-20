import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination, Controller, Thumbs } from 'swiper';
import 'swiper/swiper-bundle.css';
import '../App.css';

import Img1 from '../img/chitosesports-b_10016758.png';
import Img2 from '../img/chitosesports-b_10016758.png';
import Img3 from '../img/chitosesports-b_10016758.png';

import Img4 from '../img/pants/aozoraya-sp_10142639.png';
import Img5 from '../img/pants/aozoraya-sp_10142639.png';
import Img6 from '../img/pants/aozoraya-sp_10142639.png';

function Allchange() {

  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <div>
         <React.Fragment>
      <Swiper id="controller" onSwiper={setControlledSwiper}
      slidesPerView={3}
      // spaceBetween={250}
      >
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

      <Swiper id="controller2" onSwiper={setControlledSwiper}
      slidesPerView={3}
      >
        <SwiperSlide key='1' tag="li" className="wearLi">
        <img
          src={Img4}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='1' tag="li" className="wearLi">
        <img
          src={Img4}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='2' tag="li" className="wearLi">
        <img
          src={Img4}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='3' tag="li" className="wearLi">
        <img
          src={Img4}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='1' tag="li" className="wearLi">
        <img
          src={Img4}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='2' tag="li" className="wearLi">
        <img
          src={Img4}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='3' tag="li" className="wearLi">
        <img
          src={Img4}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
      </Swiper>
    </React.Fragment>
    </div>
  )
}

export default Allchange
