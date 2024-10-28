"use client";
import { useMemo } from "react";

/**
 * Hooks to calculate wighted rating
 * 
 * @param Object 'ratings' Rating object contain 'star': value
 */
const useWeightedRating = (ratings) => {
   return useMemo(() => {
    const ratingWeights = {
        "5-star" : 5,
        "4-star" : 4,
        "3-star" : 3,
        "2-star" : 2,
        "1-star" : 1,
       }
    
       const totalReview = Object.values(ratings).reduce((sum, count) => sum + count, 0);
       if(!totalReview) return 0;
    
       const totalRating = Object.entries(ratings).reduce((sum, [key, count]) => {
            return sum + (count * ratingWeights[key]);
       }, 0);

       const averagedRating = totalRating / totalReview;
       return (averagedRating / 5) * 10;
   }, [ratings])
}

export default useWeightedRating;