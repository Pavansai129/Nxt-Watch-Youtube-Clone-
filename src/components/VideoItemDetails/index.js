import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {VideoItemDetailsContainer} from './styledComponents'
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
import RenderVideoItem from '../RenderVideoItem'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  getVideoItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const homeApiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeApiUrl, options)
    const data = await response.json()

    if (response.ok === true) {
      const updatedVideoDetails = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        description: data.video_details.description,
        videoUrl: data.video_details.video_url,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: updatedVideoDetails,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state
    return <RenderVideoItem key={videoDetails.id} videoDetails={videoDetails} />
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const failureImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        const onClickRetry = () => {
          this.getVideoItemDetails()
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

  renderVideoItemDetails() {
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
              <LeftMenubarAndHomeVideosContainer bgColor={isDarkTheme}>
                <LeftMenubar />
                <VideoItemDetailsContainer
                  data-testid="videoItemDetails"
                  bgColor={isDarkTheme}
                >
                  {this.renderVideoItemDetails()}
                </VideoItemDetailsContainer>
              </LeftMenubarAndHomeVideosContainer>
            </HomePageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetails
