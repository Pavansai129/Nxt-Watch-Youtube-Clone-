import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  TrendingVideoItemCard,
  TrendingDetailsContainer,
  TrendingVideoItemContainer,
  TrendingVideoItemThumbnailImage,
  TrendingChannelProfileImage,
} from './styledComponents'
import {
  VideoDataContainer,
  VideoTitle,
  NameViewsPublishedContainer,
  ChannelName,
  VideoDataText,
  DotContainer,
  ViewsPublishedContainer,
} from '../VideoItem/styledComponents'

const TrendingVideoItem = props => {
  const {videoItemDetails} = props
  const {
    channel,
    id,
    title,
    viewCount,
    thumbnailUrl,
    publishedAt,
  } = videoItemDetails
  const {name, profileImageUrl} = channel
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <TrendingVideoItemCard>
            <Link to={`/videos/${id}`}>
              <TrendingVideoItemContainer>
                <TrendingVideoItemThumbnailImage
                  src={thumbnailUrl}
                  alt="video thumbnail"
                />
                <TrendingDetailsContainer>
                  <TrendingChannelProfileImage
                    src={profileImageUrl}
                    alt="channel logo"
                  />
                  <VideoDataContainer>
                    <VideoTitle fontColor={isDarkTheme}>{title}</VideoTitle>
                    <NameViewsPublishedContainer>
                      <ChannelName>{name}</ChannelName>
                      <DotContainer>
                        <BsDot
                          size="15px"
                          color={isDarkTheme ? '#475569' : ' #94a3b8'}
                        />
                      </DotContainer>
                      <ViewsPublishedContainer>
                        <VideoDataText>{viewCount} views</VideoDataText>
                        <BsDot
                          size="15px"
                          color={isDarkTheme ? '#475569' : ' #94a3b8'}
                        />
                        <VideoDataText>
                          {formatDistanceToNowStrict(new Date(publishedAt), {
                            addSuffix: true,
                          })}
                        </VideoDataText>
                      </ViewsPublishedContainer>
                    </NameViewsPublishedContainer>
                  </VideoDataContainer>
                </TrendingDetailsContainer>
              </TrendingVideoItemContainer>
            </Link>
          </TrendingVideoItemCard>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default TrendingVideoItem
