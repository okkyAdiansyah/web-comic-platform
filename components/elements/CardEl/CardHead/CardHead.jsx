import styles from '@/styles/components/elements/cardEl.module.scss';
/**
 * Card head part
 */
const CardHead = ({children}) => {
    return(
        <section className={styles['cardEl-head']}>
            {children}
        </section>
    )
}

export default CardHead;