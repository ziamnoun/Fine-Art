import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/swiper-bundle.css";



const Banner = () => {
    return (
        <div className="div md:w-[80%] m-auto mt-5 rounded-lg min-h-screen ">
        <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide >
        <div className="swiper-slide-caption">
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0625/3818/6989/files/1_07e7770a-7a1a-4dfe-83be-b502b2d47d57.jpg?v=1677310581)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Landscape Painting!</h1>
      <p className="mb-5">Transform your space with the serenity of nature captured in breathtaking landscapes. Dive into the tranquil world of landscape painting and bring the beauty of the outdoors into your home.</p>
      <button className="btn text-white bg-red-600 border-black">View Details</button>
    </div>
  </div>
</div>



          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className="swiper-slide-caption">
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://theartshopskipton.co.uk/media/wysiwyg/dhanya-a-v-zdiMKVb5fl0-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Charcoal Sketching!</h1>
      <p className="mb-5">Capture depth and emotion in striking monochrome. Delve into the timeless art of charcoal sketching and unleash your creativity in shades of black and white.</p>
      <button className="btn text-white bg-red-600 border-black">View Details</button>
    </div>
  </div>
</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-caption">
          <div className="hero min-h-screen" style={{backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjgFy2G-q6uDMjM8ToGMKvfQWOLs85cT0313L0xvGDew&s)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Portrait Drawing!</h1>
      <p className="mb-5">Discover the art of capturing the essence of individuals. Dive into the captivating world of portrait drawing and bring faces to life with every stroke of your pencil.</p>
      <button className="btn  text-white bg-red-600 border-black">View Details</button>
    </div>
  </div>
</div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>

    );
};

export default Banner;