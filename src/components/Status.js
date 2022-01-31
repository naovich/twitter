import React, { useState } from "react";
import { useReducer, useRef } from "react";
import { produce } from "immer";

const initState = {
  tweets: [
    {
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
      Image:
        "https://pbs.twimg.com/media/FKV64sKWUAIMslK?format=jpg&name=medium",
    },
    {
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
      nickname: "Antonio",
      login: "@PSGT0ni",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1487790757742268423/wxvVgSgY_400x400.jpg",
      time: "18h",
      message: "PSG Fans about Dembélé rumors",
      comment: 12,
      rt: 400,
      like: 1000,
      Image:
        "https://pbs.twimg.com/media/FKYBDqHXsAYP2VQ?format=jpg&name=small",
    },
    {
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
};

const reducer = (state = initState, action) => {
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

function Status() {
  const inputStatus = useRef();
  const buttonStatus = useRef();
  const [state, dispatch] = useReducer(reducer, initState);

  function postTweet() {
    dispatch({ type: "post", payload: { messagea: "Message", time: "17h30" } });
    console.log("rf");
  }

  return (
    <div className=" status">
      <img
        src="https://pbs.twimg.com/profile_images/1482759016535269379/m559Oniw_400x400.jpg"
        className="img-rounded "
      />
      <input
        onChange={() =>
          inputStatus.current.value != ""
            ? (buttonStatus.current.disabled = false)
            : (buttonStatus.current.disabled = true)
        }
        placeholder="Quoi de neuf ?"
        className="status_input"
        ref={inputStatus}
      />
      <div className="reponse">
        <span>
          <a href="">
            <i className="fas fa-globe-africa"></i> Tout le monde peut répondre
          </a>
        </span>
        <div className="iconstatus">
          <i className="fas fa-image"></i>
          <i className="fas fa-smile"></i>
          <button onClick={() => console.log("ok")} ref={buttonStatus} disabled>
            Tweeter
          </button>
        </div>
      </div>
    </div>
  );
}

export default Status;
