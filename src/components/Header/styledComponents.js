import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8vh;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  background: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
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
`
export const NavBarLinksListItem = styled.li``

export const ThemeButton = styled.button`
  height: 20px;
  border: none;
  background: none;
  font-size: 20px;
  @media screen and (min-width: 768px) {
    height: 40px;
  }
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
