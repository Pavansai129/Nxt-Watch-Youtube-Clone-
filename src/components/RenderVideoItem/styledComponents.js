import styled from 'styled-components'

export const VideoItemContainer = styled.div`
  width: 100vw;
  padding: 10px;
  display: flex;
  object-fit: cover;
  margin-bottom: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: none;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideoContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  border: none;
  margin-top: 20px;
`
export const ViewsAndButtonsContainer = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
`

export const LikeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  font-weight: 300;
  height: 30px;
  width: 60px;
  padding: 0;
  border: none;
  outline: none;
  background: none;
  margin-right: 5px;
  text-align: left;
  color: ${props => props.fontColor};
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 80px;
    text-align: center;
    margin-right: 10px;
  }
`
export const DisLikeButton = styled(LikeButton)``
export const SaveButton = styled(LikeButton)``

export const HorzontalLine = styled.hr`
  width: 100%;
  border: 1px solid #64748b;
  margin-top: 10px;
  margin-bottom: 20px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`
export const ProfileImage = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  padding: 5px;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
  }
`
export const ChannelName = styled.p`
  font-size: 10px;
  font-weight: 300px;
  margin-bottom: 10px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 100%;
  }
`

export const NameAndSubsContainer = styled.div`
  width: 100%;
  border: none;
`

export const Subscribers = styled.p`
  font-size: 10px;
  font-weight: 300px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Description = styled(Subscribers)`
  font-size: 12px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  @media screen and (min-width: 768px) {
    margin-left: 80px;
    font-size: 16px;
  }
`
