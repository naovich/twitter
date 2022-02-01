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
        "https://lh3.googleusercontent.com/0hTvxwcgRjoeqjkcSt34svrq9gwNmZRA4wwxhvQrAOE4bkEIAZGetdpDCB4OM1F-lgXgGtxyKuBJl4kngUaztHT6Ot67gbfLiwhJgRLWIYuvg5xiR6K8sg3vAMl4R6VdvcGZEAZa8YLF9kf_0wZNy_3mJsz9bcAdvV6lYQfiY-bHZKE5_4p4DFZOulOlTD7hmc35dr0FzhWKfRrjq4015YYbsNeoe69h7hkvw31kS2x7mBq1hkuDql-zdLTCn-UYT1aovH6duhNpDpZ5niiGLRske8GEkOvxlC0HZ_BmACXe84KERu_AFo9nqPJJ3b6_WolRvr5af1QqLg2G-qG-PQKvf6UhOb2uM_YkJZlexvOqRltkR90eZeqRVY4egnAb4CTz_ntA2dJCb9Bs6hmA-zM_oofAmKhfkSI5mldY9EsCm18KsBoV-ls9-9stHpFamQZAtzzpZ76jFfi55KiAtepKx7_cy3AEuhFTM-Od_wq3iSY1uPYtJekJGNNxZA5fbDMYsiJIecVdoAIsOcQ8RhfIsA7IJs0_oqybCSH4bNd31OT8LMNZWlPuRWJyOxZ56adH_QE7QRaooGkRpUTlbyCLSdM-djAA3DlHtNPyCS-vqqasO4feGSf5KjL-rCF1F_hTcyNNfPNZb6IHjQxzTbUuXzdwKWtMx5BiDnrq7jQtIPjqBgPkw16WslJxvINwab5ZbPeGdomNZXKhrjrgHrbg=w706-h929-no?authuser=1",
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
