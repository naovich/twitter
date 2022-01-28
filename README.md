#1

npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faCoffee} />

 <div className=" status">
          <img
            src="https://pbs.twimg.com/profile_images/1482759016535269379/m559Oniw_400x400.jpg"
            className="img-rounded "
          />
          <input placeholder="Quoi de neuf ?" className="status_input" />
          <div className="reponse">
            <span>Tout le monde peut répondre</span>
          </div>
        </div>
