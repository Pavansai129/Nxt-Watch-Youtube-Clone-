import styled from 'styled-components'

export const GamingVideoItemCard = styled.li`
  width: 40%;
  margin: 10px;
  @media screen and (min-width: 768px) {
    width: 200px;
  }
`

export const GamingVideoItemContainer = styled.div`
  width: 140px;
  border: none;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
`
export const GamingDetailsContainer = styled.div`
  width: 100%;
`
export const GamingVideoTitle = styled.p`
  font-size: 12px;
  color: ${props => (props.fontColor ? '#ffffff' : '#181818')};
  background-color: transparent;
  line-height: 1.2;
  margin-bottom: 10px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const GamingVideoDataText = styled.p`
  font-size: 10px;
  font-weight: 300px;
  color: ${props => (props.fontColor ? '#475569' : ' #616e7c')};
  background: none;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
