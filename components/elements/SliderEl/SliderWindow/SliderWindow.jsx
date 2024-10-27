import styles from '@/styles/components/elements/sliderEl.module.scss';

/**
 * Slider window wrapper
 */
const SliderWindow = ({children}) => {
    return(
        <section className={styles['sliderEl-window']}>
            {children}
        </section>
    )
}

export default SliderWindow;