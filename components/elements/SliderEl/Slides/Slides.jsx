import styles from '@/styles/components/elements/sliderEl.module.scss';

/**
 * Slider individual slides wrapper
 * 
 * @prop React.ReactDOM 'children' React DOM element
 */
const Slides = ({children}) => {
    return(
        <section className={styles['sliderEl__slides']}>
            {children}
        </section>
    )
}

export default Slides;