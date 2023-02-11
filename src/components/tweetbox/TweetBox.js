import {useState} from 'react';
import {Button, Avatar} from '@mui/material';
import {db} from '../../firebase';
import './TweetBox.css';

export function TweetBox () {
  const [tweetMessage, setTweetMessage] = useState ('');
  const [tweetImage, setTweetImage] = useState ('');

  const sendMessage = e => {
    e.preventDefault ();

    db.collection ('posts').add ({
      displayName: 'Kene10',
      username: 'Kene10',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: '',
    });

    setTweetMessage ('');
    setTweetImage ('');
  };
  return (
    <div className="tweetBox">
      <form action="">
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            value={tweetMessage}
            onChange={e => setTweetMessage (e.target.value)}
            placeholder="What's happening ?"
            type={'text'}
          />
        </div>
        <input
          className="tweetBox__imageInput"
          placeholder="(Optional): Enter Image URL"
          type="text"
          value={tweetImage}
          onChange={e => setTweetImage (e.target.value)}
        />

        <Button onClick={sendMessage} className="tweetBox__tweetButton">
          Tweet
        </Button>
      </form>

    </div>
  );
}
