import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LeftMenubarContainer,
  ContactSectionContainer,
  ContactSectionText,
  SocialMediaIconsContainer,
  SocialMediaIcon,
} from './styledComponents'
import NavLinks from '../NavLinks'

const LeftMenubar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <LeftMenubarContainer bgColor={isDarkTheme}>
          <NavLinks />
          <ContactSectionContainer>
            <ContactSectionText fontColor={isDarkTheme}>
              CONTACT US
            </ContactSectionText>
            <SocialMediaIconsContainer>
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaIconsContainer>
            <ContactSectionText fontColor={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactSectionText>
          </ContactSectionContainer>
        </LeftMenubarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default LeftMenubar
