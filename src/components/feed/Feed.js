import {useEffect, useState} from 'react';
import FlipMove from 'react-flip-move';
import {Post} from '../post/Post';
import {TweetBox} from '../tweetbox/TweetBox';
import {db} from '../../firebase';
import './Feed.css';

export function Feed () {
  const [posts, setPosts] = useState ([]);

  useEffect (() => {
    db
      .collection ('posts')
      .onSnapshot (snapshot =>
        setPosts (snapshot.docs.map (doc => doc.data ()))
      );
  }, []);

  const post = posts.map (post => (
    <Post
      key={post.username}
      displayName={post.displayName}
      username={post.username}
      image={post.image}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
    />
  ));

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Feed</h2>
        <TweetBox />
      </div>
      <FlipMove>
        {post}
      </FlipMove>
    </div>
  );
}
