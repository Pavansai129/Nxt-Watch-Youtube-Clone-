import styled from 'styled-components'

export const VideoItemCard = styled.li`
  width: 100%;
  flex-shrink: 0;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    width: 40%;
    margin-right: 10px;
    flex-grow: 1;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 10px;
    flex-grow: 1;
  }
`

export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
export const VideoItemThumbnailImage = styled.img`
  width: 100%;
  border-radius: 5px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  width: 100%;
  border: none;
`
export const ChannelProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 5px;
`

export const VideoDataContainer = styled.div`
  padding-left: 10px;
  border: none;
  width: 100%;
`

export const VideoTitle = styled.p`
  font-size: 14px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  background-color: transparent;
  line-height: 1.2;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 10px;
  }
`
export const NameViewsPublishedContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    column-gap: 10px;
  }
`
export const ViewsPublishedContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const ChannelName = styled.p`
  font-size: 10px;
  font-weight: 300px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 8px;
    width: 100%;
    margin-bottom: 5px;
  }
`
export const VideoDataText = styled.p`
  font-size: 10px;
  font-weight: 300px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 8px;
  }
`
