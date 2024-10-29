import styles from '@/styles/components/modules/boards.module.scss';

/**
 * Ranking board
 * 
 * @prop React.ReactNode 'children' React DOM element
 */
const RankBoard = ({children}) => {
    return(
        <>
            <ul className={styles['rank-board-container']}> 
                {children}
            </ul>
        </>
    )
};

export default RankBoard;
