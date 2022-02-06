#1

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

: (
<Retweet
              author={x.nickname}
              key={tweets[x.tweetId].id}
              message={tweets[x.tweetId].message}
              nickname={tweets[x.tweetId].nickname}
              login={tweets[x.tweetId].login}
              imgProfil={tweets[x.tweetId].imgProfil}
              image={tweets[x.tweetId].image}
              comment={tweets[x.tweetId].comment}
              retweet={tweets[x.tweetId].rt}
              like={tweets[x.tweetId].like}
              id={tweets[x.tweetId].id}
            />
)
