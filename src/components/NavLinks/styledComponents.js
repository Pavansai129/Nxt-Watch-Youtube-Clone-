import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavLinksContainer = styled.ul`
  width: 100%;
`

export const NavLinkListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${props => props.bgColor};
`
export const NavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 180px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.iconcolor};
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`
export const NavLinkName = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  height: 100%;
  margin-left: 25px;
  color: ${props => props.textColor};
`
