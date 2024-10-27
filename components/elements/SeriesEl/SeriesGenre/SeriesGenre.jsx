import Link from "next/link";
import styles from '@/styles/components/elements/seriesEl.module.scss';

/**
 * Series singular genre
 * 
 * @prop string 'genre' Series genre from series data
 * @prop URL 'href' Genre route to genres archive
 */
const SeriesGenre = ({genre, href}) => {
    return(
        <>
            <Link
                href={href}
            >
                {genre},
            </Link>
        </>
    )
}

export default SeriesGenre;