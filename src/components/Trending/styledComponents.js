import styled from 'styled-components'

export const TrendingBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  margin: 0;
  border: none;
  width: 100%;
  min-height: 92vh;
  margin-top: 8vh;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const TrendingVideosContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const HomePageContainer = styled.div`
  height: 100vh;
  width: 100vw;
`
export const TrendingBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: ${props => (props.bgColor ? '#181818' : '#ffffff')}};
   @media
    screen and (min-width: 768px) {
    padding: 30px;
  }
`

export const TrendingIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${props => (props.bgColor ? '#1e293b' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    height: 50px;
    width: 50px;
  }
`

export const TrendingText = styled.h1`
  font-size: 30px;
  font-weight: 500;
  color: ${props => (props.fontColor ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`
