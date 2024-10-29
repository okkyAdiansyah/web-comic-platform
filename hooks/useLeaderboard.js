'use client';

import { useState, useMemo, useEffect } from "react";
import axios from "axios";

/**
 * Custom hook to fetch leaderboard
 */
const useLeaderboard = (timeframe) => {
    /**
     * Save response data from fetching
     */
    const [payload, setPayload] = useState(null);
    const [loading, setLoading] = useState(true);

    /**
     * Timeframe key reference used in payload
     */
    const TIMEFRAME = {
        weekly : 'weeklyScore',
        monthly : 'monthlyScore',
        all : 'allTimeScore'
    }

    /**
     * Sorting function
     * 
     * @return Object
     */
    let sortedList = useMemo(() => {
        // bail if payload isn't load
        if(payload === null) return [];

        // Get timeframe key reference where the value is true
        let activeTimeframe = Object.keys(timeframe).find(key => timeframe[key] === true);
        // Get TIMEFRAME value with the key of activeFrame
        let sortKey = TIMEFRAME[activeTimeframe];
    
        // Sort data in descending order
        const sortData = payload?.sort((a, b) => b[sortKey] - a[sortKey]);

        return sortData;
    }, [timeframe, payload])

    const fetch = async () => {
        const data = await axios({
            method : 'get',
            baseURL : 'http://localhost:3000/',
            url : 'api/v1/series/leaderboard'
        }).then((res) => res.data.payload );

        setPayload(data);
        setLoading(!loading);
    }

    useEffect(() => {
        fetch();
    }, []);

    return {loading, sortedList}
}

export default useLeaderboard;