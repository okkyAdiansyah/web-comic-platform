import styles from '@/styles/components/elements/seriesEl.module.scss';

/**
 * Series author information
 * 
 * @prop string 'author' Author name from series data
 */
const SeriesAuthor = ({author}) => {
    return(
        <p className={styles['seriesEl__author']}>
            Author: {author}
        </p>
    )
}

export default SeriesAuthor;