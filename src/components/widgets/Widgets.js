import {Search} from '@mui/icons-material';
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from 'react-twitter-embed';
import './Widgets.css';

export function Widgets () {
  return (
    <div className="widgets">
      <div className="widget__input">
        <Search className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening ? </h2>
        <TwitterTweetEmbed tweetId={'1621970033952825344'} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Kene10"
          options={{height: 400}}
        />
  
        <TwitterShareButton
          url={'https://www.twitter.com/Kene10_'}
          options={{text: 'React application', via: 'Kene10'}}
        />
      </div>
    </div>
  );
}
