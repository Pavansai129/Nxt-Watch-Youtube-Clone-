import styled from 'styled-components'

export const TrendingVideoItemCard = styled.li`
  width: 100%;
`

export const TrendingVideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  object-fit; cover;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-grow: 1;
  }
`
export const TrendingVideoItemThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 0;
    width: 300px;
  }
`
export const TrendingDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 10px;
  width: 800px;
  border: none;
  width: 100%;
  flex-grow: 1;
  border: none;
`

export const TrendingChannelProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 5px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
