import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
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
  DesktopNavbarControlsContainer,
  ThemeButton,
  ProfileImage,
  NavBarLinksListItem,
  MobilePopupMenuIconContainer,
  MobilePopupTriggerButton,
  PopupMenuContainer,
  PopupCloseButton,
  PopupCloseButtonContainer,
  PopupNavLinksContainer,
  MobilePopupLogoutContainer,
  DesktopPopupLogoutContainer,
  MobileLogoutButton,
  DesktopLogoutButton,
  PopupLogoutCardContainer,
  LogoutText,
  LogoutButtonsContainer,
  LogoutButton,
} from './styledComponents'
import NavLinks from '../NavLinks'

let darkTheme
let themeIcon
let onChangeTheme

const Header = props => {
  const renderThemeIcon = () => (
    <ThemeButton data-testid="theme" onClick={() => onChangeTheme()}>
      {themeIcon}
    </ThemeButton>
  )

  const popupLogout = close => {
    const onClickConfirm = () => {
      const {history} = props
      Cookies.remove('jwt_token')
      history.replace('/login')
    }
    return (
      <PopupLogoutCardContainer fontColor={darkTheme}>
        <LogoutText fontColor={darkTheme}>
          Are you sure, you want to logout?
        </LogoutText>
        <LogoutButtonsContainer fontColor={darkTheme}>
          <LogoutButton outLine onClick={() => close()}>
            Cancel
          </LogoutButton>
          <LogoutButton onClick={onClickConfirm}>Confirm</LogoutButton>
        </LogoutButtonsContainer>
      </PopupLogoutCardContainer>
    )
  }

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
      <MobilePopupLogoutContainer className="popup-container">
        <Popup
          modal
          trigger={
            <MobileLogoutButton type="button" fontColor={darkTheme}>
              <FiLogOut />
            </MobileLogoutButton>
          }
        >
          {close => popupLogout(close)}
        </Popup>
      </MobilePopupLogoutContainer>
    )

    return (
      <MobileNavbarControlsContainer>
        <NavBarLinksListItem>{renderThemeIcon()}</NavBarLinksListItem>
        <NavBarLinksListItem>{mobilePopupMenu()}</NavBarLinksListItem>
        <NavBarLinksListItem>{mobilePopupLogout()}</NavBarLinksListItem>
      </MobileNavbarControlsContainer>
    )
  }

  const desktopNavBarControls = () => {
    const renderProfileImage = () => (
      <ProfileImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
        alt="profile"
      />
    )

    const desktopPopupLogout = () => (
      <DesktopPopupLogoutContainer className="popup-container">
        <Popup
          modal
          trigger={
            <DesktopLogoutButton type="button" brColor={darkTheme}>
              Logout
            </DesktopLogoutButton>
          }
        >
          {close => popupLogout(close)}
        </Popup>
      </DesktopPopupLogoutContainer>
    )

    return (
      <DesktopNavbarControlsContainer>
        <NavBarLinksListItem>{renderThemeIcon()}</NavBarLinksListItem>
        <NavBarLinksListItem>{renderProfileImage()}</NavBarLinksListItem>
        <NavBarLinksListItem>{desktopPopupLogout()}</NavBarLinksListItem>
      </DesktopNavbarControlsContainer>
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
            {desktopNavBarControls()}
          </NavBarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
