import { ChatBubble, Favorite, Publish, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import "./Post.css"


export function Post({
    displayName, username, verified, text, image, avatar
}) {
  return (
    <div className='post'>
        <div className='post__avatar'>
          <Avatar />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Kene10 <span><VerifiedUser className='post__badge' /> </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                  <p>Learn and build twitter application</p>
                </div>
            </div>
            <img 
              src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
              alt="" 
            />
            <div className='post__footer'>
              <ChatBubble fontSize='small' />
                <Repeat fontSize='small' />
                <Favorite fontSize="small" />
                <Publish fontSize="small" />
            </div>
        </div>
    </div>
  )
}


