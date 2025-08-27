import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselData from '../utility/carouselData';

function Banner() {
    const items = carouselData.map((item, index) => (
        <div key={index} className='h-[20vh] sm:h-[30vh] lg:h-[75vh] sm-w-40 md:shrink-0 bg-cover bg-center flex items-end' style={{ backgroundImage: `url(${item.image})` }}>
            <div className='w-full text-white text-xl text-center bg-gray-900/60 p-3'>{item.title}</div>
        </div>
    ));

    return (
        <AliceCarousel
            autoPlay
            infinite
            mouseTracking
            autoPlayInterval={2500}
            animationDuration={1000}
            disableButtonsControls
            items={items}
        />
    );
}

export default Banner;
