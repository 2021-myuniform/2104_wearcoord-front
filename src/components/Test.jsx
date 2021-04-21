// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides={true}
      // onSlideChange={(e) => console.log(e.activeIndex)}
      onSlideChange={(e) => console.log(e)}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='hoge'>Slide 1</SwiperSlide>
      <SwiperSlide className='fuga'>Slide 2</SwiperSlide>
      <SwiperSlide className='piyo'>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      ...
    </Swiper>
  );
};