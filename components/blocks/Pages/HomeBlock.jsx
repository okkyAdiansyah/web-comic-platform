import styles from '@/styles/components/blocks/page.module.scss';
import Carousel from '../Carousel/Carousel';
import { GetFeaturedPosts } from '@/action/actions';

/**
 * Home layout block
 */
const HomeBlock = async () => {
    const featuredSeriesData = GetFeaturedPosts();
    
    const [featuredSeries] = await Promise.all([featuredSeriesData]);

    return(
        <section className={`${styles['page-block']} ${styles['page-home']}`}>
            <section className={styles['page-home-main']}>
                <section className={styles['home-banner']}>
                    <Carousel 
                        seriesData={featuredSeries} 
                    />
                </section>
                <section className={styles['home-popular']}>

                </section>
                <section className={styles['home-archive']}>
                    
                </section>
            </section>
            <aside className={styles['page-home-aside']}></aside>
        </section>
    )
}

export default HomeBlock;