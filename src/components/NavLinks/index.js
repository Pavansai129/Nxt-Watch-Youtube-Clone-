import {withRouter} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  NavLinksContainer,
  NavLinkListItem,
  NavLink,
  NavLinkName,
} from './styledComponents'

const menuObj = [
  {
    id: 1,
    displayText: 'Home',
    displayIcon: <AiFillHome />,
    pathName: '/',
  },
  {
    id: 2,
    displayText: 'Trending',
    displayIcon: <HiFire />,
    pathName: '/trending',
  },
  {
    id: 3,
    displayText: 'Gaming',
    displayIcon: <SiYoutubegaming />,
    pathName: '/gaming',
  },
  {
    id: 4,
    displayText: 'Saved Videos',
    displayIcon: <BiListPlus />,
    pathName: '/saved-videos',
  },
]

const NavLinks = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const {match} = props
      const {path} = match
      return (
        <NavLinksContainer>
          {menuObj.map(eachObj => {
            const {id, displayText, displayIcon, pathName} = eachObj
            const themeBasedColor = isDarkTheme ? '#ffffff' : '#000000'
            const themeBasedBgColor = isDarkTheme ? '#475569' : '#e2e8f0'
            const selectedNavItemBgColor =
              pathName === path ? themeBasedBgColor : 'none'
            const selectedNavIconColor =
              pathName === path ? '#ff0000' : themeBasedColor
            return (
              <NavLinkListItem key={id} bgColor={selectedNavItemBgColor}>
                <NavLink to={pathName} iconcolor={selectedNavIconColor}>
                  {displayIcon}
                  <NavLinkName textColor={themeBasedColor}>
                    {displayText}
                  </NavLinkName>
                </NavLink>
              </NavLinkListItem>
            )
          })}
        </NavLinksContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default withRouter(NavLinks)
