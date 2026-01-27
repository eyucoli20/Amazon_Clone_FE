import React from 'react'
import  "../Carousel/Carousel.css"
import {Carousel} from 'react-responsive-carousel';
import {img} from './img/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";



function MyCarousel() {
    return (
        <div>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showIndicators={false}
                showThumbs={false}
            >
                {
                    img.map((imageItemLink)=> {
                        return <img src={imageItemLink} />
                    })
                }
            </Carousel>
            <div className='hero_img'></div>
        </div>
    )
}

export default MyCarousel
