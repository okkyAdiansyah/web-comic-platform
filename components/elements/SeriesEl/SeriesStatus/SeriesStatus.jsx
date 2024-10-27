import styles from '@/styles/components/elements/seriesEl.module.scss';

/**
 * Series current status
 * 
 * @prop string 'status' Series status from series data
 */
const SeriesStatus = ({status}) => {
    return(
        <p className={styles['seriesEl__status']}>Status: {status}</p>
    )
}

export default SeriesStatus;