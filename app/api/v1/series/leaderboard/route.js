import { NextResponse } from "next/server";

export const GET = async () => {
    const payload = [
        {
            title : "The Novel's Extra (Remake)",
            titleSlug : "the-novels-extra-(remake)",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 10,
            monthlyScore : 9,
            allTimeScore : 8,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/34f2d8f7-optimized.webp'
        },
        {
            title : "The Return of the Crazy Demon",
            titleSlug : "the-return-of-the-crazy-demon",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 9,
            monthlyScore : 8,
            allTimeScore : 7,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/1be5e62f.webp'
        },
        {
            title : "Nano Machine",
            titleSlug : "nano-machine",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 8,
            monthlyScore : 7,
            allTimeScore : 6,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/2ae37984-optimized.webp'
        },
        {
            title : "Return of the Mount Hua Sect",
            titleSlug : "return-of-the-mount-hua-sect",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 7,
            monthlyScore : 6,
            allTimeScore : 5,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/2ae37984-optimized.webp'
        },
        {
            title : "Revenge of the Iron-Blooded Sword Hound",
            titleSlug : "revenge-of-the-iron-blooded-sword-hound",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 6,
            monthlyScore : 5,
            allTimeScore : 4,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/01J7TV2G7719CVSTSW9T9M6F31-optimized.webp'
        },
        {
            title : "Murim Login",
            titleSlug : "murim-login",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 5,
            monthlyScore : 4,
            allTimeScore : 3,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/01J3QWG0P2B1T5RX1RB9G9D3AY-optimized.webp'
        },
        {
            title : "The Greatest Estate Developer",
            titleSlug : "the-greatest-estate-developer",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 4,
            monthlyScore : 3,
            allTimeScore : 2,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/fc6b81ea-optimized.webp'
        },
        {
            title : "Swordmaster's Youngest Son",
            titleSlug : "swordmasters-youngest-son",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 3,
            monthlyScore : 2,
            allTimeScore : 1,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/23b345c9-optimized.webp'
        },
        {
            title : "Standard of Reincarnation",
            titleSlug : "standard-of-reincarnation",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 2,
            monthlyScore : 1,
            allTimeScore : 10,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/b8682ff8-optimized-scaled.webp'
        },
        {
            title : "The Heavenly Demon Can't Live a Normal Life",
            titleSlug : "the-heavenly-demon-cant-live-a-normal-life",
            genre : ['action', 'adventure', 'fantasy'],
            rating : {
                "5-star" : 70,
                "4-star" : 25,
                "3-star" : 2,
                "2-star" : 0,
                "1-star" : 0
            },
            weeklyScore : 1,
            monthlyScore : 10,
            allTimeScore : 9,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/d86aab25-optimized.webp'
        }
    ];

    return NextResponse.json({payload}, {status: 200});
}