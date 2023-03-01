import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import requestVideo from 'common/apiVideo';

export const fetchVideoData = createAsyncThunk(
    'video/fetchVideoData',
    async (name) =>
        // await requestVideo.get(`/search`, {
        //     params: {
        //         query: name,
        //     },
        // })
        {
            console.log('video/fetchVideoData');
            await requestVideo.get(`/`);
        }
);

const initialState = {
    videoData: {},
    isLoading: false,
    errorMessage: '',
};

export const videoSlice = createSlice({
    name: 'video',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchVideoData.pending, (state, action) => {
            state.isLoading = true;
            state.videoData = [];
        });
        builder.addCase(fetchVideoData.fulfilled, (state, action) => {
            // state.videoData = action.payload.data.contents;
            state.videoData = [
                {
                    video: {
                        channelId: 'UCalHkG9WxYTbkrAahEVMzZw',
                        channelName: 'SàMy Ként',
                        lengthText: '0:50',
                        publishedTimeText: '8 years ago',
                        thumbnails: [
                            {
                                height: 270,
                                url: 'https://i.ytimg.com/vi/nxFgeTpBP6s/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBibjDQsj1uyNmfToW7oziac2oGgg',
                                width: 480,
                            },
                        ],
                        title: '3 4 Sit Up Exercise',
                        videoId: 'nxFgeTpBP6s',
                        viewCountText: '1,480 views',
                    },
                },
                {
                    video: {
                        channelId: 'UC65cPngDx5FG3qFZLexFwcA',
                        channelName: 'Gym visual',
                        description: '3/4 Sit-up',
                        lengthText: '0:07',
                        publishedTimeText: '6 years ago',
                        thumbnails: [
                            {
                                height: 270,
                                url: 'https://i.ytimg.com/vi/FXalPpHfkZk/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDncKcdvqg67Yt-lgpnWvzh_FONSw',
                                width: 480,
                            },
                        ],
                        title: '3/4 Sit-up',
                        videoId: 'FXalPpHfkZk',
                        viewCountText: '4,041 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCQfaOHrgP_QGU-E4Anx_4jA',
                        channelName: 'My PT Hub',
                        lengthText: '0:17',
                        publishedTimeText: '6 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/qIyuxNyZ0NQ/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDYQkCGBTwg7jrkBqZvlZGi2dMt-A',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/qIyuxNyZ0NQ/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA3xcTqmToNyAnj_5IR3z54SD4gOw',
                                width: 720,
                            },
                        ],
                        title: '3:4 Sit Up',
                        videoId: 'qIyuxNyZ0NQ',
                        viewCountText: '5,134 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCQfaOHrgP_QGU-E4Anx_4jA',
                        channelName: 'My PT Hub',
                        description: 'My PT Hub Fitness Exercises - ',
                        lengthText: '0:16',
                        publishedTimeText: '7 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/wm47Swzn_98/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBD8XFRhAzBJcasiDT-NsYRjEtsGg',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/wm47Swzn_98/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBlLchUCVPxHBszHV5FGVIUhDsKtQ',
                                width: 720,
                            },
                        ],
                        title: '3/4 Sit-Up',
                        videoId: 'wm47Swzn_98',
                        viewCountText: '3,430 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCs_CXnifPUvP1zKIpgAYwqw',
                        channelName: 'Emma Hubbard',
                        description:
                            'Mums and Dads stop holding your baby\'s hands and doing "pull to ',
                        lengthText: '5:33',
                        publishedTimeText: '2 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/J-d3xLowI0U/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLD1EqTaTI0QJXPdGrHAUzedsF0GLg',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/J-d3xLowI0U/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBAU-M0GGQtXm-6xaiTz4AfGRFEPg',
                                width: 720,
                            },
                        ],
                        title: 'Stop Pulling Babies into Sitting: Do these 4 Baby Activities Instead! Newborn Activities',
                        videoId: 'J-d3xLowI0U',
                        viewCountText: '1,597,280 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCurr1wG6ZW90uIb79GonuLQ',
                        channelName: 'Seriously Strong Training',
                        description: 'Decline ',
                        lengthText: '1:21',
                        publishedTimeText: '4 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/IINnwHwexkg/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAzJuFCvjFtHxDpil-TyM3S17c9mg',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/IINnwHwexkg/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCdOr8Byn2k0a4VSux0lfBlc-VBZg',
                                width: 720,
                            },
                        ],
                        title: 'Build Six Pack Abs With Decline Sit Ups',
                        videoId: 'IINnwHwexkg',
                        viewCountText: '139,717 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCEtMRF1ywKMc4sf3EXYyDzw',
                        channelName: 'ScottHermanFitness',
                        description:
                            'FULL 12 WEEK PUSH,PULL,LEGS PROGRAM!- BUILD MUSCLE & STRENGTH! - http://goo.gl/X8HeL5 FULL 12 WEEK MUSCLE ...',
                        lengthText: '1:36',
                        publishedTimeText: '12 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/QhGU5cmNZds/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBH7v5q010LqHM__afIU8NRmjUTtg',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/QhGU5cmNZds/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBAGjkeRS-diRvDwvIPjKANv8gDqw',
                                width: 720,
                            },
                        ],
                        title: 'How To: Decline Sit-Up',
                        videoId: 'QhGU5cmNZds',
                        viewCountText: '862,335 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCXXV4ECzZL0hoiR6rSGG_mQ',
                        channelName: 'Team Kopish',
                        description:
                            'Kopish #LFC #Liverpool Is Top 4 over? | Fabrizio “',
                        lengthText: '1:45:20',
                        publishedTimeText: 'Streamed 22 hours ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/JhCwpheYkCU/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBEqhds3_YVgk0AdRqx--1pKEM6xg',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/JhCwpheYkCU/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLB_3zUjpD5cDpMrcDdNJM-1_aoRNA',
                                width: 720,
                            },
                        ],
                        title: 'Is Top 4 over? | Fabrizio “3-4 players will arrive” | Monday Night Live Show',
                        videoId: 'JhCwpheYkCU',
                        viewCountText: '9,427 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCZIIRX8rkNjVpP-oLMHpeDw',
                        channelName: 'Calisthenicmovement',
                        description:
                            'Our Workout Programs: ➡️ https://calimove.com ⬅️ ✔️Instagram ➢ https://instagram.com/calimove ✔️Facebook ...',
                        lengthText: '6:52',
                        publishedTimeText: '5 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/pIvDbMEdAxI/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAVVeDFW12_zS2uQ9wt_DcJXqzUPg',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/pIvDbMEdAxI/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDX_62BsfNVqAcYWgN5PKt-QW4B9w',
                                width: 720,
                            },
                        ],
                        title: '3 Exercises Better Than Sit Ups',
                        videoId: 'pIvDbMEdAxI',
                        viewCountText: '3,952,911 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCNyOeBMHez5KXvFlTewIDAg',
                        channelName: 'This Farm Wife - Meredith Bernard',
                        description:
                            'Has it really been a week? Hope this finds you well! Things sure did heat ',
                        lengthText: '26:58',
                        publishedTimeText: '22 hours ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/cWCLvnUtTwc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLA4ADOPtKi2yzW7y96B6cOcfgqupQ',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/cWCLvnUtTwc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLC_iZHatcUuFyJqAxBJU5KQFa-K5Q',
                                width: 720,
                            },
                        ],
                        title: 'Heating Up and Healing!',
                        videoId: 'cWCLvnUtTwc',
                        viewCountText: '46,271 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCY3LTppWQBnBmJ4ISRW59zA',
                        channelName: 'Pathways',
                        description:
                            'EDUCATIONAL VIDEO** Each year, 1 in 40 children in the United States is born with an early motor delay, and an estimated ...',
                        lengthText: '1:49',
                        publishedTimeText: '9 years ago',
                        thumbnails: [
                            {
                                height: 270,
                                url: 'https://i.ytimg.com/vi/slNurYqbkvE/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDwgI8R-z72VOSzypVoVY7_12WlIQ',
                                width: 480,
                            },
                        ],
                        title: '4 Month Old Babies in Sitting Position, demonstrating Typical and Atypical Development',
                        videoId: 'slNurYqbkvE',
                        viewCountText: '736,711 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCE1u-C5RF6lMqevyLJSsE9Q',
                        channelName: 'Rhett Barber',
                        lengthText: '0:13',
                        publishedTimeText: '2 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/8DqEfCtHP-Y/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDAVlFnm7aQ2k82Fcin1_C9pnvnOQ',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/8DqEfCtHP-Y/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCNFDLhV49Op9ahp4IcQBjmMFl1Ww',
                                width: 720,
                            },
                        ],
                        title: '3/4 sit ups',
                        videoId: '8DqEfCtHP-Y',
                        viewCountText: '189 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCyj_-8VoHIuv04iEBsrKphQ',
                        channelName: 'Get Right Results',
                        description:
                            'This is a tutorial video on the proper performance of a Three Quarter (',
                        lengthText: '0:44',
                        publishedTimeText: '7 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/vvmcVK0CfHc/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAHDdV9tKKHCqDFNmXp_dkzg6RCWQ',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/vvmcVK0CfHc/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCWpHeQUwA2YbzAdoquoSaEdqJijw',
                                width: 720,
                            },
                        ],
                        title: 'Tutorial | 3/4 Sit-Ups',
                        videoId: 'vvmcVK0CfHc',
                        viewCountText: '589 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCmTe0LsfEbpkDpgrxKAWbRA',
                        channelName: 'Bob & Brad',
                        description:
                            'Physical therapist Brad Heineck presents information on the proper way to perform ',
                        lengthText: '5:45',
                        publishedTimeText: '11 years ago',
                        thumbnails: [
                            {
                                height: 270,
                                url: 'https://i.ytimg.com/vi/gXtgw7LtcgU/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLALzAiMWfmj8c3tbqmmcDmZSSAvyg',
                                width: 480,
                            },
                        ],
                        title: 'Tips for Proper Sit-ups by a Physical Therapist',
                        videoId: 'gXtgw7LtcgU',
                        viewCountText: '485,942 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCY3LTppWQBnBmJ4ISRW59zA',
                        channelName: 'Pathways',
                        description:
                            'EDUCATIONAL VIDEO** Early detection and early intervention are best. Watch these eight clips showing typical and atypical ...',
                        lengthText: '7:02',
                        publishedTimeText: '4 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/s0xa7y9JpSk/hq720.jpg?sqp=-oaymwE9COgCEMoBSFryq4qpAy8IARUAAAAAGAElAADIQj0AgKJDeAHwAQH4Af4JgALQBYoCDAgAEAEYNCBLKH8wDw==&rs=AOn4CLCsQSlLzHotjQlXSNVxEnYPWSprlw',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/s0xa7y9JpSk/hq720.jpg?sqp=-oaymwExCNAFEJQDSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYNCBLKH8wDw==&rs=AOn4CLBW2YYZIKtCCqV-PreC1qG3USk5Cw',
                                width: 720,
                            },
                        ],
                        title: '4 Month Old Baby Typical & Atypical Development Side by Side',
                        videoId: 's0xa7y9JpSk',
                        viewCountText: '2,024,408 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCwBEjHGC8qUyzCKk8h53Ucw',
                        channelName: 'The HGR Bros',
                        description: 'How to do ',
                        lengthText: '0:07',
                        publishedTimeText: '2 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/RoFi6qaxaTs/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBjX0YfR9m-D-MLHWu-nuOcKhDwWA',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/RoFi6qaxaTs/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAiVzXF8GnPr09QaZHwkyhgu5Kbog',
                                width: 720,
                            },
                        ],
                        title: 'Quick Guide: How to do 3/4 Sit Ups',
                        videoId: 'RoFi6qaxaTs',
                        viewCountText: '61 views',
                    },
                },
                {
                    video: {
                        channelId: 'UChcepIaZBiZbMaBPz2ex5pg',
                        channelName: 'OHASHIMethod',
                        description:
                            'Copyright (c) 2012, Wataru Ohashi Purchase Muscle Meridian Sedation Vol.1 at http://www.ohashi.com/store.php.',
                        lengthText: '3:26',
                        publishedTimeText: '9 years ago',
                        thumbnails: [
                            {
                                height: 270,
                                url: 'https://i.ytimg.com/vi/HOHkcfG5SIk/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAO89k0XoMZ3Q7WzX25Lwrhk9NT8Q',
                                width: 480,
                            },
                        ],
                        title: 'Ohashi Method® Bilateral Lower Back  Sedation, Lumbar 1,2,3,4 (Sit Up Position)',
                        videoId: 'HOHkcfG5SIk',
                        viewCountText: '9,951 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCwxklfO1LBHPdkcUkzY9duQ',
                        channelName: 'Live Lean TV',
                        description:
                            'I can only make it halfway up. Any good suggestions for me?" ',
                        lengthText: '5:19',
                        publishedTimeText: '3 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/s3PPU_2z9qo/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLCpQU0i89Xgr2Ru4YmINt3TsBMKaQ',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/s3PPU_2z9qo/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLA2T8vEpwnh7uqFD9LaW_uM9z8m6Q',
                                width: 720,
                            },
                        ],
                        title: 'How To Do Sit Ups Correctly For Beginners (AVOID 4 COMMON MISTAKES) | LiveLeanTV',
                        videoId: 's3PPU_2z9qo',
                        viewCountText: '510,022 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCA9G4rQYgQyLW2QL4NqTpWg',
                        channelName: 'In The Trenches With Cas',
                        description: 'This is a great way to test push ups, ',
                        lengthText: '5:24',
                        publishedTimeText: '3 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/rNgt0nvad-Q/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLChLy1Lu_oLRrK4d38Ghrfe5be8vA',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/rNgt0nvad-Q/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCyEdpL4-TLbN1iy03COqCSmS-0Tg',
                                width: 720,
                            },
                        ],
                        title: '3 Second Cadence  Exercise, Training and Test 1-100 ( Music Included)',
                        videoId: 'rNgt0nvad-Q',
                        viewCountText: '128,674 views',
                    },
                },
                {
                    video: {
                        channelId: 'UCciEG8OAv6eZhASoirehAag',
                        channelName: 'Coach Robb Beams',
                        description: 'Coach Robb: Abs-Three Qtr ',
                        lengthText: '1:26',
                        publishedTimeText: '9 years ago',
                        thumbnails: [
                            {
                                height: 202,
                                url: 'https://i.ytimg.com/vi/sz64q3hZ3sA/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBZykGKSh5Dv_7ALnZlTxhG4icz-w',
                                width: 360,
                            },
                            {
                                height: 404,
                                url: 'https://i.ytimg.com/vi/sz64q3hZ3sA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAxM6xgbnH9vEZUd_F032OvJ4pm-Q',
                                width: 720,
                            },
                        ],
                        title: 'Coach Robb: Strength: Abs-3/4 Sit Ups',
                        videoId: 'sz64q3hZ3sA',
                        viewCountText: '814 views',
                    },
                },
            ];
            state.isLoading = false;
        });
        builder.addCase(fetchVideoData.rejected, (state, action) => {
            state.videoData = [];
            state.isLoading = false;
            state.errorMessage = action.error.message;
        });
    },
});
