import {useEffect, useState} from 'react';
import FlipMove from 'react-flip-move';
import {collection, query, onSnapshot} from 'firebase/firestore';
import {Post} from '../post/Post';
import {TweetBox} from '../tweetbox/TweetBox';
import {db} from '../../firebase';
import './Feed.css';

export function Feed () {
  const [posts, setPosts] = useState ([]);

  useEffect (() => {
    const q = query (collection (db, 'posts'));

    const unsubscribe = onSnapshot (q, snapshot => {
      let posts = [];
      snapshot.forEach (doc => {
        posts.push ({...doc.data (), id: doc.id});
      });
      setPosts (posts);
    });

    return () => unsubscribe ();
  }, []);

  const post = posts.map (post => (
    <Post
      key={post.id}
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
