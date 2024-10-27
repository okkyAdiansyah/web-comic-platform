import { NextResponse } from "next/server";

export const GET = async (req) => {
    
    const payload = [
        {
            title : 'Solo Leveling : Ragnarok',
            titleSlug : 'solo-leveling-ragnarok',
            type : 'manhwa',
            genre : ['action', 'adventure', 'fantasy'],
            author : 'daul',
            status : 'ongoing',
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            synopsis : "[By Redice studio that brought you <Solo Leveling>!] The Earth's existence is under threat once more as Itarim, the gods of other universes, seek to fill the void left by the Absolute Being. Sung Jinwoo has no choice but to send Beru, the shadow ant king, to awaken his son's powers and start him on the journey he once took. Suho must conquer the shadow dungeon and earn his place in the world of hunters as he navigates through a new world against a new evil looking to swallow the world whole.",
            coverURL : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/solo-leveling-ragnarok-scaled.webp' 
        }
    ]

    return NextResponse.json({payload}, {status: 200});
}