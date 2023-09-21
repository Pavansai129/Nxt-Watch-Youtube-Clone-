import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GamingVideoItemCard,
  GamingVideoItemContainer,
  GamingDetailsContainer,
  GamingVideoTitle,
  GamingVideoDataText,
} from './styledComponents'
import {VideoItemThumbnailImage} from '../VideoItem/styledComponents'

const GamingVideoItem = props => {
  const {videoItemDetails} = props
  const {id, title, viewCount, thumbnailUrl} = videoItemDetails
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingVideoItemCard>
            <Link to={`/videos/${id}`}>
              <GamingVideoItemContainer>
                <VideoItemThumbnailImage
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <GamingDetailsContainer>
                  <GamingVideoTitle fontColor={isDarkTheme}>
                    {title}
                  </GamingVideoTitle>
                  <GamingVideoDataText>
                    {viewCount} Watching Worldwide
                  </GamingVideoDataText>
                </GamingDetailsContainer>
              </GamingVideoItemContainer>
            </Link>
          </GamingVideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingVideoItem
