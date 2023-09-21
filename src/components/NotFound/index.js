import {
  HomePageContainer,
  LeftMenubarAndHomeVideosContainer,
  HomeBodyContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureCaption,
} from '../Home/styledComponents'
import NxtWatchContext from '../../context/NxtWatchContext'
import Header from '../Header'
import LeftMenubar from '../LeftMenubar'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const failureImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <HomePageContainer bgColor={isDarkTheme}>
          <Header />
          <LeftMenubarAndHomeVideosContainer bgColor={isDarkTheme}>
            <LeftMenubar />
            <HomeBodyContainer data-testid="home" bgColor={isDarkTheme}>
              <FailureViewContainer>
                <FailureImage src={failureImage} alt="not found" />
                <FailureHeading fontColor={isDarkTheme}>
                  Page Not Found
                </FailureHeading>
                <FailureCaption fontColor={isDarkTheme}>
                  we are sorry, the page you requested could not be found.
                </FailureCaption>
              </FailureViewContainer>
            </HomeBodyContainer>
          </LeftMenubarAndHomeVideosContainer>
        </HomePageContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
