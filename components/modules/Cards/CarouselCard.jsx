import { CardEl } from '@/components/elements/CardEl';
import { SeriesEl } from '@/components/elements/SeriesEl';
import { StarReview } from '@/components/elements/StarReview';
import Cover from '@/public/asset/cover/cover-1.webp';
import styles from '@/styles/components/modules/Cards/cards.module.scss';
import Image from 'next/image';

/**
 * Card for carousel slides
 */
const CarouselCard = (
    {series = {cover : '', rating : '', title : '', type : ''}}
) => {
    console.log(series);

    return(
        <>
            <section className={styles['card-carousel-container']}>
                <section className={styles['card-carousel__bg']}>
                    <Image src={Cover} alt='cover' />
                </section>
                <section className={styles['card-carousel']}>
                    <article className={styles['card-carousel__left']}>
                        <CardEl.CardHead>
                            <StarReview.SingleStarReview />
                            <section className={styles['card-carousel__title']}>
                                <SeriesEl.SeriesTitle
                                    title={'Solo Leveling: Ragnarok'}
                                    href={'/series/solo-leveling-ragnarok'}
                                    size={'seriesEl__title--lg'}
                                />
                                <SeriesEl.SeriesType
                                    type={'manhwa'}
                                    size={'seriesEl__type--lg'}
                                />
                            </section>
                        </CardEl.CardHead>
                        <CardEl.CardTag>
                            
                        </CardEl.CardTag>
                    </article>
                    <section className={styles['card-carousel__right']}>
                        
                    </section>
                </section>
            </section>
        </>
    )
}

export default CarouselCard;