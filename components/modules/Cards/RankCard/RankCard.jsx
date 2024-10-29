import { SeriesEl } from '@/components/elements/SeriesEl';
import { StarReview } from '@/components/elements/StarReview';
import styles from '@/styles/components/modules/Cards/cards.module.scss';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Ranking single card
 * 
 * @prop string 'index' Rank indexed number
 * @prop Object 'seriesData' Series data object
 */
const RankCard = ({index, seriesData = {title: '', titleSlug: '', genre: '', rating:'', coverUrl:''}}) => {
    const {title, titleSlug, genre, rating, coverUrl} = seriesData;

    return(
        <>
            <li className={styles['rank-card-container']}>
                <span className={styles['rank-card__number']}>
                    {index + 1}
                </span>
                <Link
                    href={`/series/${titleSlug}`}
                    className={styles['rank-card__thumb']}
                >
                    <Image
                        src={coverUrl}
                        width={55}
                        height={79}
                        alt={`${titleSlug} - cover`}
                    />
                </Link>
                <article className={styles['rank-card__content-container']}>
                    <SeriesEl.SeriesTitle
                        title={title}
                        href={`/series/${titleSlug}`}
                        size={'sm'}
                    />
                    <p className={styles['rank-card__content-genre']}>
                        Genres: {genre.map((genre, index) => (
                            <SeriesEl.SeriesGenre 
                                key={`genre-${genre}-${index}`}
                                genre={genre}
                                href={`/genres/${genre}`}
                                type={'plain-text--sm'}
                            />
                        ))}
                        {/* <SeriesEl.SeriesGenre /> */}
                    </p>
                    <StarReview.GroupedStarReview />
                </article>
            </li>
        </>
    )
}

export default RankCard;