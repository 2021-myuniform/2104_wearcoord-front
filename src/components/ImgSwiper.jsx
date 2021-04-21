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



SwiperCore.use([Navigation, Pagination, Controller, Thumbs]);


function Imgswiper() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [controlledSwiper, setControlledSwiper] = useState(null);

//   function ActionLink() {
//   function clickButton(e){
//     e.preventDefault();
//     console.log(e.target.getBoundingClientRect().top);//←ブラウザ上のx,y位置を取得したい
//     console.log(e.clientX,e.clientY);//←マウス座標は取得できている
//   }
// }

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
      console.log(e.target.getBoundingClientRect().left);//←ブラウザ上のx,y位置を取得したい

}

  return (
    <React.Fragment>
      <Swiper id="controller" onSwiper={setControlledSwiper}
      slidesPerView={3}
      // spaceBetween={250}
      >
        <SwiperSlide key='1' tag="a" className="wearLi"
        >
          <button  onClick={handleClick}>
          button
          </button>
        <img
          src={Img1}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='2' tag="li" className="wearLi">
        <button  onClick={handleClick}>
          button
          </button>
        <img
          src={Img2}
          style={{ listStyle: 'none' }}
          className="wearImg"
        />
      </SwiperSlide>
        <SwiperSlide key='3' tag="li" className="wearLi">
        <button  onClick={handleClick}>
          button
          </button>
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

      <div className="coordPants">
       <img src={Img4} alt="" className="wearImg" />
      </div>
    </React.Fragment>
  );
}

export default Imgswiper
