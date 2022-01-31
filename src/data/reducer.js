import { useReducer } from "react";
import { produce } from "immer";

export const initialState = {
  tweets: [
    {
      id: 0,
      nickname: "nadhoir",
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
      nickname: "Antonio",
      login: "@PSGT0ni",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1487790757742268423/wxvVgSgY_400x400.jpg",
      time: "18h",
      message: "PSG Fans about Dembélé rumors",
      comment: 12,
      rt: 400,
      like: 1000,
      image:
        "https://pbs.twimg.com/media/FKYBDqHXsAYP2VQ?format=jpg&name=small",
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
  userId: 0,
  nickname: "nadhoir",
  login: "naovich",
  imgProfil:
    "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
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
        tweets: { ...state.tweets, tweets: action.payload },
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
