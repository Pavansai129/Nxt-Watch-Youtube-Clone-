import ReactPlayer from 'react-player'
import {AiOutlineLike} from 'react-icons/ai'
import {BiDislike, BiListPlus} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import {
  VideoItemContainer,
  VideoContainer,
  VideoDetailsContainer,
  ViewsAndButtonsContainer,
  ButtonsContainer,
  LikeButton,
  DisLikeButton,
  SaveButton,
  HorzontalLine,
  ChannelDetailsContainer,
  ProfileImage,
  NameAndSubsContainer,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponents'
import {
  ViewsPublishedContainer,
  VideoDataText,
  VideoTitle,
} from '../VideoItem/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'

const RenderVideoItem = props => {
  const {videoDetails} = props
  const {
    channel,
    title,
    viewCount,
    publishedAt,
    videoUrl,
    description,
  } = videoDetails
  const {name, profileImageUrl, subscriberCount} = channel

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {
          isDarkTheme,
          updateSavedVideos,
          updateLikedVideos,
          updateDislikedVideos,
          likedVideos,
          dislikedVideos,
          savedVideos,
        } = value
        const saveStatusText = savedVideos.find(
          each => each.id === videoDetails.id,
        )
          ? 'Saved'
          : 'Save'
        const onClickSave = () => {
          updateSavedVideos(videoDetails)
        }

        const onClickLike = () => {
          updateLikedVideos(videoDetails)
        }

        const onClickDislike = () => {
          updateDislikedVideos(videoDetails)
        }
        return (
          <VideoItemContainer>
            <VideoContainer>
              <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
            </VideoContainer>

            <VideoDetailsContainer>
              <VideoTitle fontColor={isDarkTheme}>{title}</VideoTitle>
              <ViewsAndButtonsContainer>
                <ViewsPublishedContainer>
                  <VideoDataText font-Color={isDarkTheme}>
                    {viewCount} views
                  </VideoDataText>
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
                <ButtonsContainer>
                  <LikeButton
                    onClick={onClickLike}
                    fontColor={
                      likedVideos.find(each => each.id === videoDetails.id)
                        ? '#2563eb'
                        : '#64748b'
                    }
                  >
                    <AiOutlineLike /> Like
                  </LikeButton>
                  <DisLikeButton
                    onClick={onClickDislike}
                    fontColor={
                      dislikedVideos.find(each => each.id === videoDetails.id)
                        ? '#2563eb'
                        : '#64748b'
                    }
                  >
                    <BiDislike /> Dislike
                  </DisLikeButton>
                  <SaveButton
                    onClick={onClickSave}
                    fontColor={
                      savedVideos.find(each => each.id === videoDetails.id)
                        ? '#2563eb'
                        : '#64748b'
                    }
                  >
                    <BiListPlus /> {saveStatusText}
                  </SaveButton>
                </ButtonsContainer>
              </ViewsAndButtonsContainer>
              <HorzontalLine />
              <ChannelDetailsContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <NameAndSubsContainer>
                  <ChannelName font-Color={isDarkTheme}>{name}</ChannelName>
                  <Subscribers font-Color={isDarkTheme}>
                    {subscriberCount} subscribers
                  </Subscribers>
                </NameAndSubsContainer>
              </ChannelDetailsContainer>
              <Description font-Color={isDarkTheme}>{description}</Description>
            </VideoDetailsContainer>
          </VideoItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default RenderVideoItem
