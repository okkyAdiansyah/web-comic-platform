import styles from '@/styles/components/blocks/page.module.scss';
import Carousel from '../Carousel/Carousel';
import { GetFeaturedPosts } from '@/action/actions';
import Leaderboard from '../Leaderboard/Leaderboard';
import { Cards } from '@/components/modules/Cards';
import { getWeeklyLeaderboard } from '@/services/leaderboardService';

/**
 * Home layout block
 */
const HomeBlock = async () => {
    const featuredSeriesData = GetFeaturedPosts();
    const weeklyLeaderboardData = getWeeklyLeaderboard();
    
    const [featuredSeries, weeklyLeaderboard] = await Promise.all([featuredSeriesData, weeklyLeaderboardData]);

    return(
        <section className={`${styles['page-block']} ${styles['page-home']}`}>
            <section className={styles['page-home-main']}>
                <section className={styles['home-banner']}>
                    <Carousel 
                        seriesData={featuredSeries} 
                    />
                    <Cards.PopularSingleCard 
                        seriesData={weeklyLeaderboard[0]}
                    />
                </section>
                <section className={styles['home-popular']}>

                </section>
                <section className={styles['home-archive']}>
                    
                </section>
            </section>
            <aside className={styles['page-home-aside']}>
                <Leaderboard />
            </aside>
        </section>
    )
}

export default HomeBlock;