import styles from '@/styles/components/elements/cardEl.module.scss';

/**
 * Card body part
 * 
 * @prop React.ReactNode 'children' React Dom element
 */
const CardBody = ({children}) => {
    return(
        <>
            <section className={styles['cardEl-body']}>
                {children}
            </section>
        </>
    )
}

export default CardBody;