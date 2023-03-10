import React from 'react';
import ReviewCard from './ReviewCard';
import './Slider.scss';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const reviewData = [
    {
        img: 'https://i.ibb.co/XyKgXz2/valen.webp',
        name: 'Valen',
        comment:
            'Despite high expectations on my part, Anondo demonstrated excellence in communication, listening, flexibility, and customer satisfaction. He sought to understand our project, and his only interest was to satisfy us. The project we gave him was complex, yet Anondo was professional and able to quickly and accurately integrate in react the dashboard we requested.',
    },
    {
        img: 'https://i.ibb.co/k2PkfB6/tatan.webp',
        name: 'Tatan',
        comment:
            'Very good professional gentleman. He know perfect Java CSS and html. Very good contact.',
    },
    {
        img: 'https://i.ibb.co/QD2FwpS/nhhc.webp',
        name: 'Privet...',
        comment: 'Excellent work.',
    },
    {
        img: 'https://i.ibb.co/BfLNrxt/undraw-profile-pic-ic5t.png',
        name: 'Nick',
        comment: 'Worked day and night until he meets the specs. Great worker, smooth as can be.',
    },
];

export default function Slider() {
    return (
        <div className="review_slide">
            <h4 className="head_title">Client Reviews</h4>

            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {reviewData.map((item, index) => (
                    <SwiperSlide>
                        <ReviewCard item={item} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
