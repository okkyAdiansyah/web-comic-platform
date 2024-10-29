import { CardEl } from '@/components/elements/CardEl';
import { SeriesEl } from '@/components/elements/SeriesEl';
import { StarReview } from '@/components/elements/StarReview';
import styles from '@/styles/components/modules/Cards/cards.module.scss';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Card for carousel slides
 */
const CarouselCard = (
    {series = {cover : '', rating : '', title : '', type : ''}}
) => {
    const {
        title,
        titleSlug,
        type,
        genre,
        author,
        status,
        rating,
        synopsis,
        coverURL
    } = series;

    return(
        <>
            <section className={styles['card-carousel-container']}>
                <section className={styles['card-carousel__bg']}>
                    <Image src={coverURL} alt={titleSlug} width={320} height={280}/>
                </section>
                <section className={styles['card-carousel']}>
                    <article className={styles['card-carousel__left']}>
                        <CardEl.CardHead>
                            <StarReview.SingleStarReview
                                ratings={rating}
                            />
                            <section className={styles['card-carousel__title']}>
                                <SeriesEl.SeriesTitle
                                    title={title}
                                    href={`/series/${titleSlug}`}
                                    size={'lg'}
                                />
                                <SeriesEl.SeriesType
                                    type={type}
                                    size={'seriesEl__type--lg'}
                                />
                            </section>
                        </CardEl.CardHead>
                        <CardEl.CardTag>
                            {genre.map((genre, index) => (
                                <SeriesEl.SeriesGenre 
                                    key={`genre-${index}`}
                                    href={`/genres/${genre}`}
                                    type={'plain-text'}
                                    genre={genre}
                                />
                            ))}
                        </CardEl.CardTag>
                        <CardEl.CardBody>
                            <SeriesEl.SeriesSynopsis
                                synopsis={synopsis}
                            />
                            <SeriesEl.SeriesStatus
                                status={status}
                            />
                            <SeriesEl.SeriesAuthor
                                author={author}
                            />
                        </CardEl.CardBody>
                    </article>
                    <section className={styles['card-carousel__right']}>
                        <Link
                            href={`/series/${titleSlug}`}
                        >                        
                            <figure className={styles['card-carousel__cover']}>
                                <Image src={coverURL} alt={titleSlug} width={150} height={180} />
                            </figure>
                        </Link>
                    </section>
                </section>
            </section>
        </>
    )
}

export default CarouselCard;