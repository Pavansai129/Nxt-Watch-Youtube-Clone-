import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
  position: fixed;
  padding: 5px 20px 5px 20px;
  background: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding: 10px 40px 10px 40px;
  }
`
export const HomeNavLink = styled(Link)`
  height: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`
export const HomeLinkLogo = styled.img`
  height: 20px;
  @media screen and (min-width: 768px) {
    height: 30px;
  }
`
export const MobileNavbarControlsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const DesktopNavbarControlsContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavBarLinksListItem = styled.li``

export const ThemeButton = styled.button`
  height: 20px;
  border: none;
  background: none;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    height: 20px;
    font-size: 30px;
  }
`
export const ProfileImage = styled.img`
  height: 30px;
  margin-left: 30px;
  margin-right: 30px;
`

export const MobilePopupMenuIconContainer = styled.div``
export const MobilePopupTriggerButton = styled.button`
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  border: none;
  background: none;
`
export const PopupMenuContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')};
`

export const PopupCloseButtonContainer = styled.div`
  text-align: right;
  padding: 20px 20px 0px 0px;
`
export const PopupCloseButton = styled.button`
  border: none;
  outline: none;
  background: none;
  font-size: 30px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
`
export const PopupNavLinksContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MobilePopupLogoutContainer = styled.div``

export const DesktopPopupLogoutContainer = styled.div``

export const MobileLogoutButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
`

export const DesktopLogoutButton = styled.button`
  height: 30px;
  width: 100px;
  font-size: 16px;
  background: none;
  border-radius: 5px;
  border: 1px solid ${props => (props.brColor ? '#ffffff' : '#4f46e5')};
  color: ${props => (props.brColor ? '#ffffff' : '#4f46e5')};
`

export const PopupLogoutCardContainer = styled.div`
  margin: auto;
  padding: 10px 20px 10px 20px;
  border-radius: 5px;
  background-color: ${props => (props.fontColor ? '#181818' : '#ffffff')};
  box-shadow: 0px 0px 8px ${props => (props.fontColor ? '#ffffff' : '#181818')};
  backdrop-filter: blur(5px);
`
export const LogoutText = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
`
export const LogoutButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
`
export const LogoutButton = styled.button`
  font-size: 10px;
  font-weight: 500;
  width: 60px;
  height: 30px;
  color: ${props => (props.outLine ? '#94a3b8' : '#ffffff')};
  background-color: ${props => (props.outLine ? 'transparent' : '#4f46e5')};
  border: ${props => (props.outLine ? '1px solid #94a3b8' : 'none')};
  border-radius: 5px;
  outline: none;
`
