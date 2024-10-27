import styles from '@/styles/components/elements/seriesEl.module.scss';

/**
 * Series synopsis
 * 
 * @prop string 'synopsis' Synopsis of a series from series data
 */
const SeriesSynopsis = ({synopsis}) => {
    return(
        <section>
            <strong className={styles['seriesEl__synopsis-title']}>Synopsis</strong>
            <p className={styles['seriesEl__synopsis']}>{synopsis}</p>
        </section>
    )
}

export default SeriesSynopsis;