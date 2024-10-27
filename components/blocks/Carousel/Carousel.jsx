'use client';

import { useEffect, useState, useRef, useCallback } from "react";
import { SliderEl } from "@/components/elements/SliderEl";
import { Cards } from "@/components/modules/Cards";
import styles from '@/styles/components/blocks/carousel.module.scss';
/**
 * Carousel block
 */
const Carousel = ({seriesData = []}) => {
    const [sliderCount, setSliderCount] = useState(0);
    const sliderRef = useRef();
    const sliderAutoplayTime = useRef(null);

    /**
     * Memoize function for autoplay
     * The function doesn't have to recreate itself on every render
     */
    const autoplaySlider = useCallback(() => {
        // Loop back to the start if at the end of the slides
        setSliderCount(prevCount => (prevCount === seriesData.length - 1 ? 0 : prevCount + 1));
    }, [seriesData.length]);

    /**
     * Set slider based on control index
     */
    const handleCarouselControl = useCallback((index) => {
        setSliderCount(index);
    }, []);

    useEffect(() => {
        // Update the transform based on the current slider count
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${sliderCount * 100}%)`;
        }
    }, [sliderCount]);

    useEffect(() => {
        // Set up the timeout for autoplay
        sliderAutoplayTime.current = setTimeout(autoplaySlider, 5000);

        // Clear the timeout on component unmount
        return () => clearInterval(sliderAutoplayTime.current);
    }, [sliderCount, autoplaySlider]); // This will run if sliderCount is changes or autoplaySlider is re-called

    return(
        <>
            <SliderEl.SliderWindow>
                <section className={styles['carousel-slider']} ref={sliderRef}>
                    {seriesData.map((series, index) => (
                        <SliderEl.Slides key={`slides-${index}`}>
                            <Cards.CarouselCard 
                                series={series}
                            />
                        </SliderEl.Slides>
                    ))}
                </section>
                <section className={styles['carousel-control']}>
                    {seriesData.map((series, index) => (
                        <SliderEl.SliderBulletControl 
                            key={`series-${index}`}
                            onClick={() => handleCarouselControl(index)}
                            isActive={sliderCount === index ? styles['carousel__control--isActive'] : ''}
                        />
                    ))}
                </section>
            </SliderEl.SliderWindow>
        </>
    )
}

export default Carousel;