import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'
import VideoItem from '../VideoItem'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  HomePageContainer,
  LeftMenubarAndHomeVideosContainer,
  HomeBodyContainer,
  HomeBannerSection,
  BannerContentContainer,
  BannerText,
  NxtWatchLogo,
  GetItNowButton,
  BannerCloseButton,
  HomeSearchSectionContainer,
  SearchInput,
  SearchButton,
  HomeVideosContainer,
  LoadingViewContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureCaption,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    homeVideos: [],
    showBanner: true,
    userInput: '',
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const homeApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
      const updatedHomeVideos = data.videos.map(each => ({
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
        homeVideos: updatedHomeVideos,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {homeVideos} = this.state
        const onClickRetry = () => {
          this.getHomeVideos()
        }
        return (
          <HomeVideosContainer bgColor={isDarkTheme}>
            {homeVideos.length > 0 ? (
              homeVideos.map(each => (
                <VideoItem key={each.id} videoItemDetails={each} />
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
                  Try different key words or remove search filter
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
          this.getHomeVideos()
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

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickSearch = () => {
    const {userInput} = this.state
    this.setState({searchInput: userInput}, this.getHomeVideos)
  }

  getFilteredVideos = event => {
    const {userInput} = this.state
    if (event.key === 'Enter') {
      this.setState({searchInput: userInput}, this.getHomeVideos)
    }
  }

  onClickCloseBanner = () => {
    this.setState(prevState => ({showBanner: !prevState.showBanner}))
  }

  renderHomeVideos() {
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
          const {showBanner, userInput} = this.state
          return (
            <HomePageContainer bgColor={isDarkTheme}>
              <Header />
              <LeftMenubarAndHomeVideosContainer bgColor={isDarkTheme}>
                <LeftMenubar />
                <HomeBodyContainer data-testid="home" bgColor={isDarkTheme}>
                  {showBanner && (
                    <HomeBannerSection data-testid="banner">
                      <BannerContentContainer>
                        <NxtWatchLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <BannerText>
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </BannerText>
                        <GetItNowButton>GET IT NOW</GetItNowButton>
                      </BannerContentContainer>

                      <BannerCloseButton
                        data-testid="close"
                        onClick={this.onClickCloseBanner}
                      >
                        <IoMdClose size="25px" color="#181818" />
                      </BannerCloseButton>
                    </HomeBannerSection>
                  )}
                  <HomeSearchSectionContainer bgColor={isDarkTheme}>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      value={userInput}
                      onChange={this.onChangeUserInput}
                      onKeyDown={this.getFilteredVideos}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.onClickSearch}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearch color="#616e7c" />
                    </SearchButton>
                  </HomeSearchSectionContainer>
                  {this.renderHomeVideos()}
                </HomeBodyContainer>
              </LeftMenubarAndHomeVideosContainer>
            </HomePageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
