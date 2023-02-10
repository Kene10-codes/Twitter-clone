import { Post } from "../post/Post"
import { TweetBox } from "../tweetbox/TweetBox"
import "./Feed.css"

export function Feed() {
    return (
        <div className="feed">
         <div className="feed__header">
          <h2>Feed</h2>
          <TweetBox />
         </div>  
         <Post />
        </div>
    )
}