import React, {useRef, useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const Slider2 = () => {

    
let navigationPrevRef = React.useRef(null);
let navigationNextRef = React.useRef(null);
const [slidPrevsBtn, setSlidPrevsBtn] = React.useState(false);
const [slidNextBtn, setSlidNextBtn] = React.useState(true);




  return (
    <>
      <div className='z-[99999999999] w-full main-slider mt-[100px]'>
         <Swiper 
        
         slidesPerView={4}
         spaceBetween={30}
         onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl =
                navigationPrevRef.current;
              swiper.params.navigation.nextEl =
                navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
         modules={[Navigation]} className="mySwiper w-full h-full">
       
        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-1.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>

        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-2.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>Unique relief printing technology.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-3.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>Hologramic key linked to blockchain.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-4.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>Natural wood frame.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-5.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl object-cover h-[220px] w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>Natural wood frame.</div>
            
        </SwiperSlide>

        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-1.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>

        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-2.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-3.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-4.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-5.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl object-cover h-[220px] w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>

        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-3.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-4.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>


        <SwiperSlide className="bg-white bg-opacity-20 rounded-2xl px-5 w-fit min-h-[300px] max-h-[300px]">
            <img src="/images/nft-slide-5.png" alt="nft"  className='transform -translate-y-9 mx-auto text-center rounded-2xl object-cover h-[220px] w-[220px]'/>
            <div className='text-white font-[600] text-[18px] mb-5'>High value printed picture.</div>
            
        </SwiperSlide>

        
      </Swiper>

      <div className="flex items-center justify-center gap-6 mt-10">
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationPrevRef}
                >
                  <img src="/images/left.svg"/>
                </button>
                <button
                  className="w-[50px] h-[50px] rounded-xl flex items-center justify-center bg-[#3E3576]"
                  
                  ref={navigationNextRef}
                >
                  <img src="/images/right.svg"/>

                </button>
              </div>
         </div>
    </>
  )
}

export default Slider2