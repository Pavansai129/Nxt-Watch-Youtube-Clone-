import styled from 'styled-components'

export const LeftMenubarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 92vh;
  width: 250px;
  position: fixed;
  margin-top: 8vh;
  background-color: ${props => (props.bgColor ? '#000000' : '#ffffff')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ContactSectionContainer = styled.div`
  background: none;
  padding: 20px;
`

export const ContactSectionText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  background: none;
`

export const SocialMediaIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const SocialMediaIcon = styled.img`
  height: 25px;
`
