import React from 'react';
import {List, Image} from 'semantic-ui-react' 

const Tweets = ({ tweets }) => (
  <List divided relaxed>
  { tweets.map( tweet => 
      <List.Item key={tweet.id}>
      <Image avatar src={tweet.user.profile_image_url} alt="user avatar"/>
      </List.Item>
  ) 
  }
  </List>
)

export default Tweets