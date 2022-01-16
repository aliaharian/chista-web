import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Trust1 from '../../../assets/images/homepage/trust_1.png';
import Trust2 from '../../../assets/images/homepage/trust_2.png';
import Trust3 from '../../../assets/images/homepage/trust_3.png';
import Trust4 from '../../../assets/images/homepage/trust_4.png';
import SwiperCore, {
    Autoplay
} from 'swiper/core';
import Style from '../../../assets/stylesheet/index.module.scss';

SwiperCore.use([Autoplay]);

function TrustUsSwiper() {
    const [perView, setPerView] = useState(4)

    const updateDimensions = () => {
        if (window.innerWidth <= 1200 && window.innerWidth >= 480)
            setPerView(3)
        else if(window.innerWidth <= 480)
            setPerView(2)
        else 
            setPerView(4)
    };

    useEffect(() => {
        if (window.innerWidth <= 1200 && window.innerWidth >= 480)
            setPerView(3)
        else if(window.innerWidth <= 480)
            setPerView(2)
        else 
            setPerView(4)
            
        window.addEventListener('resize', updateDimensions);
    })

    return (
        <Swiper
        slidesPerView={perView}
        autoplay={{
            "delay": 2000,
            "disableOnInteraction": false,
        }}
        >
            <SwiperSlide className={Style.trustSwiperItem}>
                <div>
                    <img src={Trust1} alt={""}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={Trust2} alt={""}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={Trust3} alt={""}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={Trust4} alt={""}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={Trust1} alt={""}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={Trust2} alt={""}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={Trust3} alt={""}/>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <img src={Trust4} alt={""}/>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default TrustUsSwiper;