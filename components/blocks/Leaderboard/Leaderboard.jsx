'use client';

import { useState } from 'react';
import { Board } from '@/components/modules/Board';
import styles from '@/styles/components/blocks/leadeboard.module.scss'
import useLeaderboard from '@/hooks/useLeaderboard';
import { Cards } from '@/components/modules/Cards';

/**
 * Leaderboard block
 */
const Leaderboard = () => {
    /**
     * State to control which board is active
     */
    const [boardTimeframe, setBoardTimeframe] = useState({
        weekly : true,
        monthly : false,
        all : false
    })

    const {loading, sortedList} = useLeaderboard(boardTimeframe);

    if(!loading){
        console.log(sortedList);
    }

    /**
     * Set board timeframe state
     * 
     * @param string 'activeKey' Targeted board timeframe state
     */
    const setSingleTimeframe = (activeKey) => {
        // Update state with a new object where only the active key is `true`.
        setBoardTimeframe(prevState => 
            Object.keys(prevState).reduce((newState, key) => {
                newState[key] = key === activeKey;
                return newState;
            }, {})
        );
    };

    return(
        <>
            <section className={styles['container']}>
                <section className={styles['head']}>
                    <p>Popular</p>
                </section>
                <Board.BoardTabControl
                    timeframeState={boardTimeframe}
                    setWeekTimeframe={() => {setSingleTimeframe('weekly')}}
                    setMonthTimeframe={() => {setSingleTimeframe('monthly')}}
                    setAlltimeTimeframe={() => {setSingleTimeframe('all')}}
                />
                <Board.RankBoard>
                    {loading ? 'Loading...' :
                        sortedList.map((series, index) => (
                            <Cards.RankCard 
                                key={`${series.titleSlug} - ${index}`}
                                index={index}
                                seriesData={series} 
                            />
                        ))
                    }
                </Board.RankBoard>
            </section>
        </>
    )
}

export default Leaderboard;