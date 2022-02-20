import { useReducer } from "react";
import { produce } from "immer";
import database from "./database";

export const userId = 0;
export const initialState = {
  userId: userId,
  profilId: userId,
  currentUser: {
    userId: userId,
    imgProfil: database.users[userId].imgProfil,
    nickname: database.users[userId].nickname,
    login: database.users[userId].login,
  },
  userProfil: {
    userId: database.users[userId].userId,
    imgProfil: database.users[userId].imgProfil,
    imgBanner: database.users[userId].imgBanner,
    nickname: database.users[userId].nickname,
    login: database.users[userId].login,
    bio: database.users[userId].bio,
    subscription: database.users[userId].subscription,
    subscriber: database.users[userId].subscriber,
    tweets: [],
    tweetsUser: [],
  },
  init: false,
  tweets: [],
  answers: [],
  tweet: {},
  trends: database.trends,
  suggestions: database.suggestions,
  overlay: "",
  isOverlayOpened: false,
};

//--------------------- WALL -------------------------

function getWallData(id) {
  const wall = database.users[id].subscriptions;
  const wall2 = [];
  let n = 0;
  const exp = database.users;

  for (let i = 0; i < wall.length; i++) {
    for (let j = 0; j < database.users[wall[i]].tweets.length; j++) {
      exp[wall[i]].tweets[j].nickname = exp[wall[i]].nickname;
      exp[wall[i]].tweets[j].userId = exp[wall[i]].userId;

      //  database.users[wall[i]].tweets[j].date =
      //   database.users[wall[i]].tweets[j].date;

      exp[wall[i]].tweets[j].keyId = -1;

      exp[wall[i]].tweets[j].id = {
        user: exp[wall[i]].userId,
        id: exp[wall[i]].tweets[j].id,
      };
      exp[wall[i]].tweets[j].comment = exp[wall[i]].tweets[j].answers.length;
      exp[wall[i]].tweets[j].login = exp[wall[i]].login;
      exp[wall[i]].tweets[j].imgProfil = exp[wall[i]].imgProfil;
      if (exp[wall[i]].tweets[j].type == 1) {
        exp[wall[i]].tweets[j].response = {
          userId: database.users[exp[wall[i]].tweets[j].question.userId].userId,
          login: database.users[exp[wall[i]].tweets[j].question.userId].login,
        };
      }

      wall2.push(exp[wall[i]].tweets[j]);
    }
  }
  wall2.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  wall2.map((x, index) => (x.keyId = index));

  return wall2;
}

//--------------------- PROFIL -------------------------
function getWallDataProfil(id) {
  const wall2 = [];
  const exp = database.users[id];

  exp.tweets.forEach((element) => {
    element.keyId = 0;
    element.id = {
      user: id,
      id: element.id,
    };
    element.userId = exp.userId;
    element.nickname = exp.nickname;
    element.login = exp.login;
    element.imgProfil = exp.imgProfil;

    wall2.push(exp.element);
  });
  console.log(wall2);

  wall2.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  wall2.map((x, index) => (x.keyId = index));

  return wall2;
}

//--------------------- ANSWERS -------------------------

function getAnswers(userId, tweetId) {
  const exp = database.users;
  const wall = [];
  //console.log("userId:" + userId);
  //console.log("tweetId:" + tweetId);

  const user = database.users[userId];
  const ans = [...database.users[userId].tweets[tweetId].answers];

  ans.forEach((element) => {
    const answer = {
      keyId: -1,
      type: element.type,
      userId: element.userId,
      nickname: exp[element.userId].nickname,
      login: exp[element.userId].login,
      imgProfil: exp[element.userId].imgProfil,
      id: element.id,
      date: element.date,
      message: element.message,
      comment: element.comment,
      retweet: element.rt,
      like: element.like,
      likeOn: element.likeOn,
      rtOn: element.rtOn,
      likes: element.likes,
      rts: element.rts,
      comments: element.comments,
      answers: element.answers,
    };

    wall.push(answer);
  });

  console.log(wall);

  wall.forEach((element) => {
    // console.log(typeof element.message);
    //element.message = "ok";
  });

  wall.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date);
  });

  // wall2.map((x, index) => (x.keyId = index));

  return wall;
}

function getAnswers2(keyId) {
  //  tweets.filter((x) => {
  //    return x.question && x.question.keyId == keyId;
  // });
}

//--------------------- REDUCER -------------------------

const reducer = (state = initialState, action) => {
  const ap = action.payload;
  switch (action.type) {
    case "wall":
      return produce(state, (draft) => {
        draft.tweets = getWallData(action.payload);
        draft.init = true;
      });

    case "answers":
      return produce(state, (draft) => {
        draft.answers = getAnswers(
          action.payload.userId,
          action.payload.tweetId
        );
        // draft.tweet =
      });

    case "overlay":
      return produce(state, (draft) => {
        draft.overlay = action.payload;
        draft.isOverlayOpened = true;
        // draft.tweet =
      });

    case "closeOverlay":
      return produce(state, (draft) => {
        draft.isOverlayOpened = false;
        // draft.tweet =
      });

    case "profil":
      return produce(state, (draft) => {
        // draft.tweets = getWallDataProfil(action.payload);
        // console.log(action.payload);
        // action.payload = state.userProfil.userId;
        draft.userProfil = {
          userId: database.users[action.payload].userId,
          imgProfil: database.users[action.payload].imgProfil,
          imgBanner: database.users[action.payload].imgBanner,
          nickname: database.users[action.payload].nickname,
          login: database.users[action.payload].login,
          bio: database.users[action.payload].bio,
          subscription: database.users[action.payload].subscription,
          subscriber: database.users[action.payload].subscriber,
          //tweets: getWallDataProfil(action.payload),
        };
      });

    case "post":
      return {
        ...state,
        tweets: [...state.tweets, action.payload],
      };
    case "response":
      return produce(state, (draft) => {
        draft.tweets = [...draft.tweets, action.payload];
        draft.tweets[action.payload.question.tweetId].answers = [
          ...draft.tweets[action.payload.question.tweetId].answers,
          action.payload.question,
        ];

        const answ = {
          userId: action.payload.userId,
          tweetId: 0, //action.payload.id.id,
        };
        // console.log(answ);

        draft.tweets[action.payload.question.tweetId].answers = [
          ...draft.tweets[action.payload.question.tweetId].answers,
          answ,
        ];
        draft.tweets[action.payload.parentKeyId].comment++;
        //console.log(draft.tweets[action.payload.question.tweetId].answers);
      });
    case "search":
      return {
        ...state,
        search: action.payload,
      };
    case "like":
      return produce(state, (draft) => {
        //const userIdTweetId = action.payload.id.split("-");

        const request = draft.tweets[action.payload.keyId];
        if (request.likeOn) {
          request.like--;
          // database.users[action.payload.id.user].tweets[action.payload.id.id]
          //  .like--;
          request.likeOn = false;
        } else {
          request.like++;
          //  database.users[action.payload.id.user].tweets[action.payload.id.id]
          //   .like++;
          request.likeOn = true;
        }
      });

    case "rt":
      return produce(state, (draft) => {
        const request = draft.tweets[action.payload.keyId];

        if (request.rtOn) {
          request.rt--;
          //  database.user[userIdTweetId[0]].tweets[userIdTweetId[1]].rt--;
          request.rtOn = false;
        } else {
          request.rt++;
          // database.user[userIdTweetId[0]].tweets[userIdTweetId[1]].rt++;
          request.rtOn = true;
        }
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
