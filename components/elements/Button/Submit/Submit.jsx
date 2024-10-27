import styles from '@/styles/components/elements/button.module.scss';

/**
 * Form submit button
 */
const Submit = ({children, submitFor}) => {
    return(
        <>
            <button type="submit" className={`${styles['button__submit']} ${styles[submitFor]}`}>
                {children}
            </button>
        </>
    )
}

export default Submit;