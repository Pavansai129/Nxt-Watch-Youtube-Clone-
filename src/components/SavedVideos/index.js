import {BiListPlus} from 'react-icons/bi'
import {
  TrendingBodyContainer,
  TrendingVideosContainer,
  TrendingBanner,
  TrendingIcon,
  TrendingText,
} from '../Trending/styledComponents'
import {
  HomePageContainer,
  LeftMenubarAndHomeVideosContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureCaption,
} from '../Home/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideoItem from '../TrendingVideoItem'
import LeftMenubar from '../LeftMenubar'
import Header from '../Header'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      return (
        <HomePageContainer bgColor={isDarkTheme}>
          <Header />
          <LeftMenubarAndHomeVideosContainer>
            <LeftMenubar />
            <TrendingBodyContainer
              data-testid="savedVideos"
              bgColor={isDarkTheme}
            >
              <TrendingBanner bgColor={isDarkTheme}>
                <TrendingIcon bgColor={isDarkTheme}>
                  <BiListPlus color="#ff0000" size="25px" />
                </TrendingIcon>
                <TrendingText fontColor={isDarkTheme}>
                  Saved Videos
                </TrendingText>
              </TrendingBanner>
              <TrendingVideosContainer bgColor={isDarkTheme}>
                {savedVideos.length > 0 ? (
                  savedVideos.map(each => (
                    <TrendingVideoItem key={each.id} videoItemDetails={each} />
                  ))
                ) : (
                  <FailureViewContainer>
                    <FailureImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                      alt="no saved videos"
                    />
                    <FailureHeading fontColor={isDarkTheme}>
                      No Saved Videos found
                    </FailureHeading>
                    <FailureCaption fontColor={isDarkTheme}>
                      You can save your videos while watching them
                    </FailureCaption>
                  </FailureViewContainer>
                )}
              </TrendingVideosContainer>
            </TrendingBodyContainer>
          </LeftMenubarAndHomeVideosContainer>
        </HomePageContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
