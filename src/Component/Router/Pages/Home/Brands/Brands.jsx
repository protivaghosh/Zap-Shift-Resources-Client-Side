import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import amazon from "../../../../../assets/brands/amazon.png"
import amazon_vector from "../../../../../assets/brands/amazon_vector.png"
import casio from "../../../../../assets/brands/casio.png"
import moonstar from "../../../../../assets/brands/moonstar.png"
import randstad from "../../../../../assets/brands/randstad.png"
import star from "../../../../../assets/brands/star.png"
import start_people from "../../../../../assets/brands/start_people.png"
import { Autoplay } from 'swiper/modules';

const brandsLogo =[amazon, amazon_vector, casio, moonstar, randstad, star, start_people]

const Brands = () => {
    return (
         <div>
              <h3 className='font-bold lg:text-3xl text-center'>We've helped thousands of sales teams</h3>
        <Swiper 
        loop={true} 
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}>
            {
                brandsLogo.map((logo, index) => <SwiperSlide key={index}><img className='my-6 lg:my-10 lg:h-6' src={logo} alt="" /></SwiperSlide>)
            }
          </Swiper>
         </div>
       
    );
};

export default Brands;