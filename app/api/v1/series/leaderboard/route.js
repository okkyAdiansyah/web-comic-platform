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
            weeklyScore : 1250,
            monthlyScore : 1250,
            allTimeScore : 5000,
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
            weeklyScore : 1245,
            monthlyScore : 1245,
            allTimeScore : 4950,
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
            weeklyScore : 1210,
            monthlyScore : 1210,
            allTimeScore : 4550,
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
            weeklyScore : 1240,
            monthlyScore : 1240,
            allTimeScore : 4580,
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
            weeklyScore : 1190,
            monthlyScore : 1190,
            allTimeScore : 4680,
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
            weeklyScore : 1090,
            monthlyScore : 1090,
            allTimeScore : 4580,
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
            weeklyScore : 1070,
            monthlyScore : 1070,
            allTimeScore : 4590,
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
            weeklyScore : 1200,
            monthlyScore : 1200,
            allTimeScore : 4600,
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
            weeklyScore : 1000,
            monthlyScore : 1000,
            allTimeScore : 4500,
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
            weeklyScore : 1235,
            monthlyScore : 1235,
            allTimeScore : 4535,
            coverUrl : 'https://dev-my-sample-porto.pantheonsite.io/wp-content/uploads/2024/10/d86aab25-optimized.webp'
        }
    ];

    return NextResponse.json({payload}, {status: 200});
}