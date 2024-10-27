import Link from "next/link";
import styles from '@/styles/components/elements/seriesEl.module.scss';

/**
 * Series Title
 * 
 * @prop string 'title' Series title coming from series data
 * @prop URL 'href' Route to series singular page
 * @prop string 'size' Title size to be used in card
 */
const SeriesTitle = ({title, href, size}) => {
    return(
        <Link
            href={href}
            className={`${styles['seriesEl__title']} ${styles[size]}`}
        >
            {title}
        </Link>
    )
}

export default SeriesTitle;