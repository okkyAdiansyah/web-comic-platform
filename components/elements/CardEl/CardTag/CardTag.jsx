import styles from '@/styles/components/elements/cardEl.module.scss';

/**
 * Card tag used for genre and category
 * 
 * @prop React.ReactDOM 'children' React DOM element
 */
const CardTag = ({children}) => {
    return(
        <section className={styles['cardEl-tag']}>
            {children}
        </section>
    )
}

export default CardTag;