import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import {GamingBodyContainer} from './styledComponents'
import {
  TrendingBanner,
  TrendingIcon,
  TrendingText,
} from '../Trending/styledComponents'
import {
  HomePageContainer,
  HomeVideosContainer,
  LeftMenubarAndHomeVideosContainer,
  LoadingViewContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureCaption,
  RetryButton,
} from '../Home/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    gamingVideos: [],
  }

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const homeApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeApiUrl, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedGamingVideos = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        gamingVideos: updatedGamingVideos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gamingVideos} = this.state
        const onClickRetry = () => {
          this.getGamingVideos()
        }
        return (
          <HomeVideosContainer bgColor={isDarkTheme}>
            {gamingVideos.length > 0 ? (
              gamingVideos.map(each => (
                <GamingVideoItem key={each.id} videoItemDetails={each} />
              ))
            ) : (
              <FailureViewContainer>
                <FailureImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                  alt="no videos"
                />
                <FailureHeading fontColor={isDarkTheme}>
                  No Search results found
                </FailureHeading>
                <FailureCaption fontColor={isDarkTheme}>
                  Try different keywords or remove search filter
                </FailureCaption>
                <RetryButton type="button" onClick={onClickRetry}>
                  Retry
                </RetryButton>
              </FailureViewContainer>
            )}
          </HomeVideosContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const onClickRetry = () => {
          this.getGamingVideos()
        }

        return (
          <FailureViewContainer>
            <FailureImage src={failureImage} alt="failure view" />
            <FailureHeading fontColor={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureCaption fontColor={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureCaption>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <LoadingViewContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoadingViewContainer>
  )

  renderGamingVideos() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomePageContainer bgColor={isDarkTheme}>
              <Header />
              <LeftMenubarAndHomeVideosContainer>
                <LeftMenubar />
                <GamingBodyContainer data-testid="gaming" bgColor={isDarkTheme}>
                  <TrendingBanner bgColor={isDarkTheme}>
                    <TrendingIcon bgColor={isDarkTheme}>
                      <SiYoutubegaming color="#ff0000" size="25px" />
                    </TrendingIcon>
                    <TrendingText fontColor={isDarkTheme}>Gaming</TrendingText>
                  </TrendingBanner>
                  {this.renderGamingVideos()}
                </GamingBodyContainer>
              </LeftMenubarAndHomeVideosContainer>
            </HomePageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
