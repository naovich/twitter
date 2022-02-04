import { useReducer } from "react";
import { produce } from "immer";

export const initialState = {
  userId: 0,
  nickname: "Nadhoir",
  login: "naovich",
  imgProfil:
    "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
  tweets: [
    {
      id: 0,
      nickname: "Nadhoir",
      login: "naovich",
      imgProfil:
        "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
      time: "19h",
      message:
        "Il avait commencé son mois de janvier par une grosse polémique, il le referme sur une gratification. Le rappeur Gims, couronné de nombreux succès commerciaux en France grâce à ses tubes internationaux, a fait grincer des dents au lendemain des fêtes de fin",
      comment: 52,
      rt: 156,
      like: 632,
      image:
        "https://pbs.twimg.com/media/FKV64sKWUAIMslK?format=jpg&name=medium",
    },
    {
      id: 1,
      nickname: "Sandrine Rousseau",
      login: "sandrousseau",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1482088250080645126/zZji88sP_400x400.jpg",
      time: "19h",
      message: "Je propose que Hollande se déclare maintenant.",
      comment: 1300,
      rt: 1400,
      like: 7000,
    },
    {
      id: 2,
      nickname: "Aurélie Casse",
      login: "AureCasse",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1469385588910563335/1XGuakT9_400x400.jpg",
      time: "18h",
      message:
        "La lumière du soleil à travers les ailes d’un colibri jacobin noir au Brésil En admiration Par Christian Spence",
      comment: 12,
      rt: 400,
      like: 1000,
      image:
        "https://pbs.twimg.com/media/FKQ0povX0AAKNrg?format=jpg&name=medium",
    },
    {
      id: 3,
      nickname: "Aliotop",
      login: "Aliotop_off",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1486396762055131136/Gx8KZ_6A_400x400.jpg",
      time: "30 janv.",
      message:
        "Sergio Ramos compte autant de blessures que de titularisations avec le PSG (3)",
      comment: 12,
      rt: 425,
      like: 6500,
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
        "https://pbs.twimg.com/profile_images/1165822715732930565/uz3J1eOl_400x400.jpg",
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

// Selector
/*export const getAllTweet = (tweets) =>
  tweets?.reduce((amount, item) => item.price + amount, 0);*/

const reducer = (state = initialState, action) => {
  const ap = action.payload;
  switch (action.type) {
    case "post":
      return {
        ...state,
        tweets: [action.payload, ...state.tweets],
      };
    case "*":
      return produce(state, (draft) => {});

    case "/":
      return produce(state, (draft) => {});

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
