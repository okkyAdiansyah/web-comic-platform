import { SliderEl } from "@/components/elements/SliderEl";
import { Cards } from "@/components/modules/Cards";
import styles from '@/styles/components/blocks/carousel.module.scss';
/**
 * Carousel block
 */
const Carousel = ({seriesData = []}) => {
    return(
        <>
            <SliderEl.SliderWindow>
                <section className={styles['carousel-slider']}>
                    {seriesData.map((series, index) => (
                        <SliderEl.Slides key={`slides-${index}`}>
                            <Cards.CarouselCard 
                                series={series}
                            />
                        </SliderEl.Slides>
                    ))}
                </section>
            </SliderEl.SliderWindow>
        </>
    )
}

export default Carousel;