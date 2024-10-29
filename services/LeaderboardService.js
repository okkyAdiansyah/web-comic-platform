
import axios from "axios";

export const getWeeklyLeaderboard = async () => {
    const res = await axios({
        method : 'get',
        baseURL : 'http://localhost:3000/',
        url : 'api/v1/series/leaderboard'
    }).then(res => res.data.payload);

    const sortedSeries = res?.sort((a, b) => b.weeklyScore - a.weeklyScore);

    return sortedSeries;
}