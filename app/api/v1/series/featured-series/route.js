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
        },
        {
            title : 'Childhood Friend of the Zenith',
            titleSlug : 'childhood-friend-of-the-zenith',
            type : 'manhwa',
            genre : ['action', 'martial arts', 'fantasy', 'wuxia'],
            author : '-',
            status : 'ongoing',
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            synopsis : "Gu Yangchun, who betrayed the Orthodox sects, became a demonic human under the Heavenly Demon.",
            coverURL : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/childhood-friend-of-zenith-scaled.webp' 
        },
        {
            title : 'Return of the Disaster-Class Hero',
            titleSlug : 'return-of-the-disaster-class-hero',
            type : 'manhwa',
            genre : ['action', 'adventure', 'fantasy', 'magic', 'returner'],
            author : 'SAN.G (산지직송)',
            status : 'ongoing',
            rating : {
                "5-star" : 70,
                "4-star" : 0,
                "3-star" : 0,
                "2-star" : 0,
                "1-star" : 0
            },
            synopsis : "I was the greatest hero on Earth. 'But he's dead. How could the guy we've killed come back?' 'I dunno. But if he can come back, just let him.' I really came back after 20 years? 'Why're you so surprised? What? Did you do something to hurt your conscience?' You bastards. Just you wait.",
            coverURL : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/return-of-disaster-class-hero.webp' 
        },
        {
            title : 'Childhood Friend of the Zenith',
            titleSlug : 'childhood-friend-of-the-zenith',
            type : 'manhwa',
            genre : ['action', 'martial arts', 'fantasy', 'wuxia'],
            author : '-',
            status : 'ongoing',
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            synopsis : "Gu Yangchun, who betrayed the Orthodox sects, became a demonic human under the Heavenly Demon.",
            coverURL : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/ffdf3337-optimized.webp' 
        },
        {
            title : 'Return of the Disaster-Class Hero',
            titleSlug : 'return-of-the-disaster-class-hero',
            type : 'manhwa',
            genre : ['action', 'adventure', 'fantasy', 'magic', 'returner'],
            author : 'SAN.G (산지직송)',
            status : 'ongoing',
            rating : {
                "5-star" : 70,
                "4-star" : 0,
                "3-star" : 0,
                "2-star" : 0,
                "1-star" : 0
            },
            synopsis : "I was the greatest hero on Earth. 'But he's dead. How could the guy we've killed come back?' 'I dunno. But if he can come back, just let him.' I really came back after 20 years? 'Why're you so surprised? What? Did you do something to hurt your conscience?' You bastards. Just you wait.",
            coverURL : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/7b70a81e-optimized.webp' 
        },
        {
            title : 'Childhood Friend of the Zenith',
            titleSlug : 'childhood-friend-of-the-zenith',
            type : 'manhwa',
            genre : ['action', 'martial arts', 'fantasy', 'wuxia'],
            author : '-',
            status : 'ongoing',
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            synopsis : "Gu Yangchun, who betrayed the Orthodox sects, became a demonic human under the Heavenly Demon.",
            coverURL : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/01J3QWG0P2B1T5RX1RB9G9D3AY-optimized.webp' 
        },
    ]

    return NextResponse.json({payload}, {status: 200});
}