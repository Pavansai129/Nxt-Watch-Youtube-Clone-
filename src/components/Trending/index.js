import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import {
  TrendingBodyContainer,
  TrendingVideosContainer,
  TrendingBanner,
  TrendingIcon,
  TrendingText,
} from './styledComponents'
import {
  HomePageContainer,
  LeftMenubarAndHomeVideosContainer,
  LoadingViewContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureCaption,
  RetryButton,
} from '../Home/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import TrendingVideoItem from '../TrendingVideoItem'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideos: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const homeApiUrl = 'https://apis.ccbp.in/videos/trending'
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
      const updatedTrendingVideos = data.videos.map(each => ({
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingVideos: updatedTrendingVideos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingVideos} = this.state
        const onClickRetry = () => {
          this.getTrendingVideos()
        }
        return (
          <TrendingVideosContainer bgColor={isDarkTheme}>
            {trendingVideos.length > 0 ? (
              trendingVideos.map(each => (
                <TrendingVideoItem key={each.id} videoItemDetails={each} />
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
          </TrendingVideosContainer>
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
          this.getTrendingVideos()
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

  renderTrendingVideos() {
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
                <TrendingBodyContainer
                  data-testid="trending"
                  bgColor={isDarkTheme}
                >
                  <TrendingBanner bgColor={isDarkTheme}>
                    <TrendingIcon bgColor={isDarkTheme}>
                      <HiFire color="#ff0000" size="25px" />
                    </TrendingIcon>
                    <TrendingText fontColor={isDarkTheme}>
                      Trending
                    </TrendingText>
                  </TrendingBanner>
                  {this.renderTrendingVideos()}
                </TrendingBodyContainer>
              </LeftMenubarAndHomeVideosContainer>
            </HomePageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
