import styles from '@/styles/components/elements/seriesEl.module.scss';

/**
 * Series type
 * 
 * @prop string 'type' Type of series coming from series data
 * @prop string 'size' Size class for element
 */
const SeriesType = ({type, size}) => {
    return(
        <p className={`${styles['seriesEl__type']} ${styles[size]}`}>
            {type}
        </p>
    )
}

export default SeriesType;