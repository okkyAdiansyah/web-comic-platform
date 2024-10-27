import Link from "next/link";
import styles from '@/styles/components/elements/seriesEl.module.scss';

/**
 * Series singular genre
 * 
 * @prop string 'genre' Series genre from series data
 * @prop URL 'href' Genre route to genres archive
 */
const SeriesGenre = ({genre, href, type}) => {
    return(
        <>
            <Link
                href={href}
                className={`${styles['seriesEl__genre']} ${styles[`seriesEl__genre--${type}`]}`}
            >
                {genre}
            </Link>
        </>
    )
}

export default SeriesGenre;