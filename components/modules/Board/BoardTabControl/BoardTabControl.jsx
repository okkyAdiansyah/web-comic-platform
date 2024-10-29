import TabControl from '@/components/elements/TabControl/TabControl';
import styles from '@/styles/components/modules/boards.module.scss';

/**
 * Board tab control
 * 
 * @prop callback 'setWeekTimeframe' Click event handler to update board with weekly data
 * @prop callback 'setMonthTimeframe' Click event handler to update board with monthly data
 * @prop callback 'setAlltimeTimeframe' Click event handler to update board with all time data
 * @prop boolean 'timeframeState' State for tab control styling
 */
const BoardTabControl = ({setWeekTimeframe, setMonthTimeframe, setAlltimeTimeframe, timeframeState}) => {

    const {weekly, monthly, all} = timeframeState;
    return(
        <>
            <section className={styles['tab-control-wrapper']}>
                <section className={styles['tab-control-container']}>
                    <TabControl 
                        onClick={setWeekTimeframe}
                        isActive={weekly}
                        content='weekly'
                    />
                    <TabControl 
                        onClick={setMonthTimeframe}
                        isActive={monthly}
                        content='monthly'
                    />
                    <TabControl 
                        onClick={setAlltimeTimeframe}
                        isActive={all}
                        content='all'
                    />
                </section>
            </section>
        </>
    )
};

export default BoardTabControl;