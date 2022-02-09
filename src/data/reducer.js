import { useReducer } from "react";
import { produce } from "immer";
import database from "./database";

export const userId = 0;
export const initialState = {
  userId: userId,
  imgProfil: database.users[userId].imgProfil,
  nickname: database.users[userId].nickname,
  login: database.users[userId].login,
  bio: database.users[userId].bio,
  subscription: database.users[userId].subscription,
  subscriber: database.users[userId].subscriber,
  tweets: [],

  trends: database.trends,
  suggestions: database.suggestions,
};

function getWallData(id) {
  const wall = database.users[id].subscriptions;
  const wall2 = [];
  let n = 0;

  for (let i = 0; i < wall.length; i++) {
    n++;
    for (let j = 0; j < database.users[wall[i]].tweets.length; j++) {
      n++;
      database.users[wall[i]].tweets[j].nickname =
        database.users[wall[i]].nickname;

      //  database.users[wall[i]].tweets[j].date =
      //   database.users[wall[i]].tweets[j].date;

      database.users[wall[i]].tweets[j].keyId = -1;

      database.users[wall[i]].tweets[j].id =
        database.users[wall[i]].userId +
        "-" +
        database.users[wall[i]].tweets[j].id;

      database.users[wall[i]].tweets[j].login = database.users[wall[i]].login;
      database.users[wall[i]].tweets[j].imgProfil =
        database.users[wall[i]].imgProfil;

      wall2.push(database.users[wall[i]].tweets[j]);
    }
  }
  wall2.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  wall2.map((x, index) => (x.keyId = index));

  return wall2;
}

const reducer = (state = initialState, action) => {
  const ap = action.payload;
  switch (action.type) {
    case "wall":
      return {
        ...state,
        tweets: getWallData(action.payload),
      };

    case "post":
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };
    case "search":
      return {
        ...state,
        search: action.payload,
      };
    case "like":
      return produce(state, (draft) => {
        // const userIdTweetId = action.payload.id.split("-");
        // action.payload.isLiked
        //  ? draft.userId[userIdTweetId[0]].tweets[userIdTweetId[1]].like--
        //   : draft.userId[userIdTweetId[0]].tweets[userIdTweetId[1]].like++;

        action.payload.isLiked
          ? draft.tweets[action.payload.keyId].like--
          : draft.tweets[action.payload.keyId].like++;
      });

    case "rt":
      return produce(state, (draft) => {
        action.payload.isRted
          ? draft.tweets[action.payload.keyId].rt--
          : draft.tweets[action.payload.keyId].rt++;
      });

    case "-":
      return {
        ...state,
        item: { ...state.item, a2: 333 },
      };

    case "add":
      return {
        ...state,
        nums: [...state.nums, action.payload.a],
      };
    default:
      return {};
  }
};
export default reducer;

export const initialState1 = {
  userId: 0,
  nickname: "Nadhoir",
  login: "naovich",
  subscription: 1563,
  subscriber: 1863,
  bio: "Passionné de développment informatique depuis toujours",
  imgProfil:
    "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
  search: "",
  tweets: [
    {
      type: 0,
      id: 0,
      nickname: "Nadhoir",
      login: "naovich",
      imgProfil:
        "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
      time: "5 févr.",
      message: "Paris, ville lumière",
      comment: 21,
      rt: 23,
      like: 5,
      image:
        "https://pbs.twimg.com/media/FIrTcoaWUAoDPTQ?format=jpg&name=large",
    },
    {
      type: 0,
      id: 1,
      nickname: "Korben",
      login: "korben",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1490386429347876870/-uYFrN2m_400x400.png",
      time: "5 févr.",
      message:
        "Quand on y pense, les meilleurs humoristes et artistes français sont belges.",
      comment: 3,
      rt: 123,
      like: 236,
    },
    {
      type: 0,
      id: 2,
      nickname: "Nadhoir",
      login: "naovich",
      imgProfil:
        "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
      time: "2 févr.",
      message:
        "Il avait commencé son mois de janvier par une grosse polémique, il le referme sur une gratification. Le rappeur Gims, couronné de nombreux succès commerciaux en France grâce à ses tubes internationaux, a fait grincer des dents au lendemain des fêtes de fin",
      comment: 2,
      rt: 63,
      like: 102,
      image: "http://source.unsplash.com/random",
    },

    {
      type: 0,
      id: 3,
      nickname: "Sandrine Rousseau",
      login: "sandrousseau",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1482088250080645126/zZji88sP_400x400.jpg",
      time: "19h",
      message: "Je propose que Hollande se déclare maintenant.",
      comment: 1300,
      rt: 1400,
      like: 7123,
    },

    {
      type: 0,
      id: 4,
      nickname: "Aliotop",
      login: "Aliotop_off",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1486396762055131136/Gx8KZ_6A_400x400.jpg",
      time: "30 janv.",
      message:
        "Sergio Ramos compte autant de blessures que de titularisations avec le PSG (3)",
      comment: 1,
      rt: 1,
      like: 0,
    },
    {
      type: 0,
      id: 5,
      nickname: "Aurélie Casse",
      login: "AureCasse",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1469385588910563335/1XGuakT9_400x400.jpg",
      time: "18h",
      message:
        "La lumière du soleil à travers les ailes d’un colibri jacobin noir au Brésil En admiration Par Christian Spence",
      comment: 12,
      rt: 52,
      like: 236,
      image: "https://images.unsplash.com/photo-1642950810976-e0a9926389ab",
    },
    {
      type: 0,
      id: 6,
      nickname: "Nadhoir",
      login: "naovich",
      imgProfil:
        "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
      time: "19h",
      message: "React est la bibilothèque la plus utilisée",
      comment: 52,
      rt: 156,
      like: 632,
    },
  ],

  trends: [
    {
      id: 1,
      categorie: "Pop",
      hashtag: "Rihanna",
      rt: 42000,
    },
    {
      id: 2,
      categorie: "Gaming",
      hashtag: "Destiny",
      rt: 25700,
    },
    {
      id: 3,
      hashtag: "Comores",
      rt: 17200,
    },
    {
      id: 4,
      hashtag: "DBZ",
      rt: 5200,
    },
    {
      id: 5,
      categorie: "Football",
      hashtag: "PSG",
      rt: 985,
    },
  ],

  suggestions: [
    {
      id: 3,
      nickname: "BFMTV",
      login: "BFMTV",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1489959309148659715/Vf0JLG2c_400x400.jpg",
    },
    {
      id: 1,
      nickname: "Fabien Roussel",
      login: "Fabien_Roussel",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1483356102133751809/7z_59a5w_400x400.jpg",
    },
    {
      id: 2,
      nickname: "Yassou",
      login: "yassou_93p",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1484700093634818049/M9DhzlkR_400x400.jpg",
    },
  ],
};
