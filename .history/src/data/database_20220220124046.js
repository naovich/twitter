export let database = {
  currentUserId: 0,
  search: "",
  subscriptions: [1, 2, 4],
  users: [
    {
      userId: 0,
      nickname: "Nadhoir",
      login: "naovic",
      suscribeDate: "juin 2009",
      birthdate: "22 décembre",
      website: "nadhoir.com",
      subscription: 1563,
      subscriber: 1863,
      bio: "Passionné de développment informatique depuis toujours",
      imgProfil:
        "https://pbs.twimg.com/profile_images/2507404252/22p3u6fhoduk4dr09l89_reasonably_small.gif",
      imgBanner:
        "https://images.unsplash.com/photo-1543811547-2fc2bd7b64e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      subscriptions: [0, 1, 2, 3, 4],
      subscribers: [0, 2, 3, 4],
      tweets: [
        {
          type: 0,
          id: 0,
          date: "2021-12-25T12:00:00Z",
          message: "Paris, ville lumière",
          comment: 21,
          rt: 23,
          like: 5,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [
            {
              userId: 2,
              tweetId: 5,
            },
            {
              userId: 3,
              tweetId: 1,
            },
            {
              userId: 4,
              tweetId: 5,
            },
          ],
          image:
            "https://cdn.radiofrance.fr/s3/cruiser-production/2019/03/f8d6163e-803f-4a76-b018-f56ea732ecac/1136_gettyimages-956138032.jpg",
        },
        {
          type: 0,
          id: 1,
          date: "2022-02-09T12:00:22Z",
          message:
            "Il avait commencé son mois de janvier par une grosse polémique, il le referme sur une gratification. Le rappeur Gims, couronné de nombreux succès commerciaux en France grâce à ses tubes internationaux, a fait grincer des dents au lendemain des fêtes de fin",
          comment: 2,
          rt: 63,
          like: 102,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
          image: "http://source.unsplash.com/random",
        },
        {
          type: 0,
          id: 2,
          date: "2022-02-03T07:00:00Z",
          message: "React est la bibilothèque la plus utilisée",
          comment: 52,
          rt: 156,
          like: 632,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          question: {
            userId: 1,
            tweetId: 0,
          },
          type: 1,
          id: 3,
          date: "2022-02-04T08:43:11Z",
          message: "Réponse 1 : La beauté de la nature",
          comment: 0,
          rt: 0,
          like: 0,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
      ],
    },

    {
      userId: 1,
      nickname: "Korben",
      login: "korben",
      suscribeDate: "mai 2007",
      birthdate: "23 mars 1982",
      website: "korben.info",
      subscription: 9636,
      subscriber: 523,
      bio: "Chef de l’Internet",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1490386429347876870/-uYFrN2m_400x400.png",
      imgBanner:
        "https://images.unsplash.com/photo-1644665154099-57f1f473b0cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      subscriptions: [0, 2, 3, 4],
      subscribers: [0, 2, 3, 4],
      tweets: [
        {
          type: 0,
          id: 0,
          date: "2021-12-26T12:00:00Z",
          message: "La beauté de la nature",
          comment: 7,
          rt: 74,
          like: 124,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [
            {
              userId: 4,
              tweetId: 4,
            },
            {
              userId: 0,
              tweetId: 3,
            },
          ],
          image:
            "https://t1.ldh.be/g7DGwaGwXkzfeM33BYU4QAspGRc=/0x0:2560x1280/1920x960/5fc51a7ed8ad585a45ac65cf.jpg",
        },
        {
          type: 0,
          id: 1,
          date: "2022-01-13T11:00:00Z",
          message: "Le Bitcoin prend 13% aujourd'hui",
          comment: 5,
          rt: 32,
          like: 74,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          type: 0,
          id: 2,
          date: "2022-02-04T08:23:11Z",
          message: "Belle hausse du BTC",
          comment: 3,
          rt: 7,
          like: 24,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
          image:
            "https://cdn.radiofrance.fr/s3/cruiser-production/2021/12/74bea5a8-f318-46c7-943a-f8b6c124d883/838_gettyimages-1347891685.jpg",
        },
        {
          type: 0,
          id: 3,
          date: "2022-02-04T08:33:11Z",
          message:
            "Quand on y pense, les meilleurs humoristes et artistes français sont belges. ",
          comment: 17,
          rt: 5,
          like: 80,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
      ],
    },
    {
      userId: 2,
      nickname: "Sandrine Rousseau",
      login: "sandrousseau",
      suscribeDate: "septembre 2011",
      birthdate: "8 mars 1972",
      subscription: 123,
      subscriber: 12356,
      bio: "Femme politique écoféministe",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1482088250080645126/zZji88sP_400x400.jpg",
      imgBanner:
        "https://images.unsplash.com/photo-1610500795224-fb86b02926d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      subscriptions: [0, 1, 3, 4],
      subscribers: [0, 3, 4],
      tweets: [
        {
          type: 0,
          id: 0,
          date: "2021-12-27T12:00:00Z",
          message: "Nous y arriverons sans aucun doute",
          comment: 1300,
          rt: 1400,
          like: 7123,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          type: 0,
          id: 1,
          date: "2022-01-14T11:00:00Z",
          message: "Splendide tortue de mer! DBZ",
          comment: 26,
          rt: 856,
          like: 1532,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
          image:
            "https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2021/03/19/node_175086/38430339/public/2021/03/19/B9726476334Z.1_20210319143941_000%2BGV0HQ70N7.1-0.jpg?itok=J_k8ONKX1616161187",
        },
        {
          type: 0,
          id: 2,
          date: "2022-02-05T10:45:13Z",
          message: "S'amméliorer chaque jour, telle est ma devise Comores",
          comment: 124,
          rt: 2366,
          like: 4253,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          type: 0,
          id: 3,
          date: "2022-02-06T10:07:33Z",
          message: "Egalité pour tous!",
          comment: 3,
          rt: 7,
          like: 24,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
          image:
            "https://www.francetvinfo.fr/pictures/-4azGrMKyyyF0TzBHtFZXHkkSJk/1500x843/2019/05/08/phpWRrUQY.jpg",
        },
        {
          type: 0,
          id: 4,
          date: "2022-02-07T05:24:53Z",
          message: "Nous avons eu le courage de réformer les choses",
          comment: 17,
          rt: 5,
          like: 80,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          question: {
            userId: 0,
            tweetId: 0,
          },
          type: 1,
          id: 3,
          date: "2022-02-04T09:49:11Z",
          message: "Réponse 1 : Paris ville lumière",
          comment: 0,
          rt: 0,
          like: 0,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
      ],
    },
    {
      userId: 3,
      nickname: "Aliotop",
      login: "Aliotop_off",
      suscribeDate: "juin 2017",
      birthdate: "2 janvier 1981",
      subscription: 753,
      subscriber: 457,
      bio: "Passionné de foot et de cinéma",
      imgProfil:
        "https://images.unsplash.com/photo-1644621957983-85d8fe6b3e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      imgBanner:
        "https://images.unsplash.com/photo-1644657217541-488e95665ad9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
      subscriptions: [0, 1, 2],
      tweets: [
        {
          type: 0,
          id: 0,
          date: "2021-12-28T09:31:00Z",
          message:
            "Sergio Ramos compte autant de blessures que de titularisations avec le PSG (3)",
          comment: 1,
          rt: 1,
          like: 0,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          question: {
            userId: 0,
            tweetId: 0,
          },
          type: 1,
          id: 1,
          date: "2022-02-04T011:43:11Z",
          message: "Réponse 1 : Paris ville lumière ",
          comment: 0,
          rt: 0,
          like: 0,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
      ],
    },
    {
      userId: 4,
      nickname: "Aurélie Casse",
      login: "AureCasse",
      suscribeDate: "décembre 2009",
      birthdate: "14 juin 1986",
      subscription: 753,
      subscriber: 457,
      bio: "Journaliste",
      imgProfil:
        "https://pbs.twimg.com/profile_images/1469385588910563335/1XGuakT9_400x400.jpg",
      imgBanner:
        "https://images.unsplash.com/photo-1644530777878-f576db6ac8ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80",
      subscriptions: [0, 1, 2, 3],
      tweets: [
        {
          type: 0,
          id: 0,
          date: "2021-12-29T06:22:13Z",
          message:
            "La lumière du soleil à travers les ailes d’un colibri jacobin noir au Brésil En admiration Par Christian Spence Rousseau",
          comment: 12,
          rt: 52,
          like: 236,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
          image:
            "https://geo.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fgeo.2F2019.2F11.2F18.2Fed186dca-e810-423a-9eb0-05e9050e23db.2Ejpeg/1150x647/background-color/ffffff/quality/70/les-5-infos-a-savoir-sur-le-colibri.jpg",
        },
        {
          type: 0,
          id: 1,
          date: "2022-01-20T03:00:00Z",
          message:
            "Monica Vitti, dans l’Éclipse d’Antonioni avec Alain Delon. Magnifique, baignée de lumière, ensorcelante. Film splendide sur l’ennui Cœur noirCœur noirCœur noir",
          comment: 14,
          rt: 35,
          like: 243,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          type: 0,
          id: 2,
          date: "2022-02-06T11:55:03Z",
          message: "Les Hospices de Beaune Cœur marron PSG",
          comment: 14,
          rt: 13,
          like: 145,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
          image:
            "https://pbs.twimg.com/media/FK_K3tiXEAAqsOf?format=jpg&name=medium",
        },
        {
          type: 0,
          id: 3,
          date: "2022-02-09T05:12:43Z",
          message: "Et Pascal Sangla, à ses côtés, est si drôle !!!",
          comment: 2,
          rt: 2,
          like: 23,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          question: {
            userId: 1,
            tweetId: 0,
          },
          type: 1,
          id: 3,
          date: "2022-02-04T08:45:11Z",
          message: "Réponse 2 : La beauté de la nature",
          comment: 0,
          rt: 0,
          like: 0,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
        {
          question: {
            userId: 0,
            tweetId: 0,
          },
          type: 1,
          id: 3,
          date: "2022-02-04T07:43:11Z",
          message: "Réponse 1 : Paris ville lumière",
          comment: 0,
          rt: 0,
          like: 0,
          likeOn: false,
          rtOn: false,
          likes: [],
          rts: [],
          comments: [],
          answers: [],
        },
      ],
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
      hashtag: "Rousseau",
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

export default database;
