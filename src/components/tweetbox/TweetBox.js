import { Button, Avatar } from '@mui/material'
import "./TweetBox.css"

export function TweetBox() {
  return (
    <div className='tweetBox'>
        <form action=''>
          <div className='tweetBox__input'>
            <Avatar src="" />
            <input placeholder="What's happening" type={"text"} />
          </div>
          <input className='tweetBox__imageInput' placeholder='Enter Image URL' type="text" />   

          <Button className="tweetBox__tweetButton">Tweet</Button>
        </form>
      
    </div>
  )
}

