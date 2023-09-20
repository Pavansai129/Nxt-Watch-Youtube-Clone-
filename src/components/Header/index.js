import Popup from 'reactjs-popup'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {HiMoon, HiOutlineSun} from 'react-icons/hi'
import {IoMdClose} from 'react-icons/io'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavBarContainer,
  HomeLinkLogo,
  HomeNavLink,
  MobileNavbarControlsContainer,
  ThemeButton,
  NavBarLinksListItem,
  MobilePopupMenuIconContainer,
  MobilePopupTriggerButton,
  PopupMenuContainer,
  PopupCloseButton,
  PopupCloseButtonContainer,
  PopupNavLinksContainer,
} from './styledComponents'
import NavLinks from '../NavLinks'

let darkTheme
let themeIcon
let onChangeTheme

const Header = () => {
  const renderThemeIcon = () => (
    <ThemeButton data-testid="theme" onClick={() => onChangeTheme()}>
      {themeIcon}
    </ThemeButton>
  )

  const mobileNavBarControls = () => {
    const mobilePopupMenu = () => {
      const popupMenu = close => (
        <PopupMenuContainer bgColor={darkTheme}>
          <PopupCloseButtonContainer>
            <PopupCloseButton
              type="button"
              onClick={() => close()}
              fontColor={darkTheme}
            >
              <IoMdClose />
            </PopupCloseButton>
          </PopupCloseButtonContainer>
          <PopupNavLinksContainer>
            <NavLinks />
          </PopupNavLinksContainer>
        </PopupMenuContainer>
      )
      return (
        <MobilePopupMenuIconContainer>
          <Popup
            modal
            trigger={
              <MobilePopupTriggerButton type="button" fontColor={darkTheme}>
                <GiHamburgerMenu />
              </MobilePopupTriggerButton>
            }
          >
            {close => popupMenu(close)}
          </Popup>
        </MobilePopupMenuIconContainer>
      )
    }

    const mobilePopupLogout = () => (
      <div className="popup-container">
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              <FiLogOut />
            </button>
          }
        >
          {close => (
            <>
              <div>
                <p>React is a popular and widely used programming language</p>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </>
          )}
        </Popup>
      </div>
    )

    return (
      <MobileNavbarControlsContainer>
        <NavBarLinksListItem>{renderThemeIcon()}</NavBarLinksListItem>
        <NavBarLinksListItem>{mobilePopupMenu()}</NavBarLinksListItem>
        <NavBarLinksListItem>{mobilePopupLogout()}</NavBarLinksListItem>
      </MobileNavbarControlsContainer>
    )
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme} = value
        darkTheme = isDarkTheme
        onChangeTheme = changeTheme
        themeIcon = darkTheme ? (
          <HiOutlineSun color={darkTheme ? '#ffffff' : '#181818'} />
        ) : (
          <HiMoon color={darkTheme ? '#ffffff' : '#181818'} />
        )
        const websiteLogo = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
          <NavBarContainer bgColor={darkTheme}>
            <HomeNavLink to="/">
              <HomeLinkLogo src={websiteLogo} alt="website logo" />
            </HomeNavLink>
            {mobileNavBarControls()}
          </NavBarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default Header
