import { activityEnum } from "../enum/activityEnum";
import { v4 as uuidv4 } from "uuid";

function getMockDatesFromCurrentDate({ year = 0, date = 0, hour = 0, minutes = 0 }) {
  const mockDate = new Date();
  if (year) {
    mockDate.setFullYear(mockDate.getFullYear() - year);
  }
  else if (date) {
    mockDate.setDate(mockDate.getDate() - date);
  }
  else if (hour) {
    mockDate.setHours(mockDate.getHours() - hour);
  }
  else if (minutes) {
    mockDate.setMinutes(mockDate.getMinutes() - minutes);
  }

  return mockDate.toISOString();
}

export const homeTweet = [
  {
    id: uuidv4().toString(),
    profilePict: "https://pbs.twimg.com/profile_images/1582359892693762049/XXEwWLiU_400x400.jpg",
    fullName: "Poem Heaven",
    username: "@PoemHeaven",
    date: getMockDatesFromCurrentDate({minutes: 5}),
    text: "numb.",
    images: [
      "https://pbs.twimg.com/media/FkKQgzTXkAMFZ_g?format=jpg&name=large"
    ],
    statistic: {
      replies: 0,
      retweets: 20,
      likes: 20120,
      views: 0
    }
  },
  {
    id: uuidv4().toString(),
    profilePict: "https://pbs.twimg.com/profile_images/1609826136086970374/1fbDJOaX_400x400.jpg",
    fullName: "Salary Survey 3.0 24 Jan - 21 Feb Cek Pinned Tweet",
    username: "@hrdbacot",
    date: "2023-02-21T03:25:05.760Z",
    text: "Welcome to udah ngerasa kerja bener masih disalah salahin club, pak.",
    statistic: {
      replies: 20,
      retweets: 101,
      likes: 136,
      views: 13690
    },
    quoteTweet: {
      id: uuidv4().toString(),
      profilePict: "https://pbs.twimg.com/profile_images/669793728970682369/CaHHKPMc_400x400.png",
      fullName: "CNN Indonesia",
      username: "@CNNIndonesia",
      date: "2023-02-20T03:10:05.760Z",
      text: "Dirut KCI soal Stasiun Manggarai: Udah Kerja Keras Tetap Aja Salah \ncnnindonesia.com/nasional/20230...",
    },
    threadReply: [
      {
        id: uuidv4().toString(),
        profilePict: "https://pbs.twimg.com/profile_images/1609826136086970374/1fbDJOaX_400x400.jpg",
        fullName: "Salary Survey 3.0 24 Jan - 21 Feb Cek Pinned Tweet",
        username: "@hrdbacot",
        date: "2023-02-21T03:26:05.760Z",
        text: "Tp emg Manggarai butut banget.",
        statistic: {
          replies: 0,
          retweets: 20,
          likes: 120,
          views: 0
        }
      },
      // {
      //   id: uuidv4().toString(),
      //   profilePict: "https://pbs.twimg.com/profile_images/1609826136086970374/1fbDJOaX_400x400.jpg",
      //   fullName: "Salary Survey 3.0 24 Jan - 21 Feb Cek Pinned Tweet",
      //   username: "@hrdbacot",
      //   date: "Feb 20, 2023",
      //   text: "Tp emg Manggarai butut banget.",
      //   statistic: {
      //     replies: 0,
      //     retweets: 20,
      //     likes: 120,
      //     views: 0
      //   }
      // }
    ]
  },
  {
    id: uuidv4().toString(),
    profilePict: "https://pbs.twimg.com/profile_images/1582359892693762049/XXEwWLiU_400x400.jpg",
    fullName: "Poem Heaven",
    username: "@PoemHeaven",
    date: "2022-12-17T16:10:05.760Z",
    text: "numb.",
    images: [
      "https://pbs.twimg.com/media/FkKQgzTXkAMFZ_g?format=jpg&name=large"
    ],
    statistic: {
      replies: 0,
      retweets: 20,
      likes: 20120,
      views: 0
    }
  },
  {
    id: uuidv4().toString(),
    profilePict: "https://pbs.twimg.com/profile_images/1346198275146309632/UW2xzQBj_400x400.jpg",
    fullName: "Programmers Humor",
    username: "@ProgrammersHum1",
    date: "2022-12-15T01:10:05.760Z",
    text: "junior dev got 999+ code reviews",
    images: [ 
      "https://pbs.twimg.com/media/Fk-S6Q2aEAI7Nws?format=jpg&name=medium"
    ],
    statistic: {
      replies: 3,
      retweets: 0,
      likes: 0,
      views: 0
    },
    activity: {
      type: activityEnum.retweeted,
      by: "You"
    } 
  },
  {
    id: uuidv4().toString(),
    profilePict: "https://pbs.twimg.com/profile_images/1614997164140433410/OM6aUbAO_400x400.jpg",
    fullName: "Zaki Raihan",
    username: "@narukami_80",
    date: "2022-12-10T15:10:05.760Z",
    text: "Sometimes things just are what they are… \n\n It is time for you… to wake up…",
    statistic: {
      replies: 0,
      retweets: 0,
      likes: 0,
      views: 0
    }
  },
]