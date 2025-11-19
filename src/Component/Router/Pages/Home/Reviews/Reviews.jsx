import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import customer from "../../../../../assets/customer-top.png"
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = ({reviewsPromise}) => {
    const review = use(reviewsPromise);
    console.log(review)
    return (
        <div className='my-20'>
            <div className='text-center flex  flex-col justify-center items-center'>
                <img src={customer} alt="" />
                <h3 className='font-bold text-xl md:text-2xl lg:text-3xl mt-2 lg:mt-4'>What our customers are sayings</h3>
                <p className='text-gray-400 mt-4'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce<br></br> pain, and strengthen your body with ease!</p>
            </div>
            <div className='mt-4'>
                   <Swiper
        loop={true}
        spaceBetween={30}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 30,
          stretch: "50%",
          depth: 200,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {
            review.map(review =><SwiperSlide key={review.id}>
         <ReviewCard review={review}></ReviewCard>
        </SwiperSlide>)
        }
       
      </Swiper>
            </div>
        </div>
    );
};

export default Reviews;