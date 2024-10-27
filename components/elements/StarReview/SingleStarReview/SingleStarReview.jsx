'use client';

import { useMemo } from "react";
import styles from '@/styles/components/elements/starReview.module.scss';

/**
 * Single star review
 * 
 * @prop {'5-star': number, '4-star': number, '3-star': number, '2-star': number, '1-star': number} 'review' Object of review accumulation for single calculation
 * @prop string 'size' Star review size
 */
const SingleStarReview = ({ratings = {}, size}) => {
    /**
     * Count review value from review object
     * 
     * @return integer
     */
    // const countReviewValue = () => {
    //     let rate = Object.values(ratings);
    //     let sum = rate.reduce((prev, curr) => prev + curr, 0);

    //     return sum/rate.length;
    // }
    // let reviewValue = useMemo(countReviewValue, [ratings]);

    return(
        <section className={styles['starReview-single']}>
            <figure>
                <svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 24 24"><path fill="#f1e05a" d="m8.243 7.34l-6.38.925l-.113.023a1 1 0 0 0-.44 1.684l4.622 4.499l-1.09 6.355l-.013.11a1 1 0 0 0 1.464.944l5.706-3l5.693 3l.1.046a1 1 0 0 0 1.352-1.1l-1.091-6.355l4.624-4.5l.078-.085a1 1 0 0 0-.633-1.62l-6.38-.926l-2.852-5.78a1 1 0 0 0-1.794 0z"/></svg>
            </figure>
            <p className={styles['starReview__rating']}>
                9.8
            </p>
        </section>
    )
}

export default SingleStarReview;