import styled from 'styled-components'

export const VideoItemDetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8vh;
  border: none;
  background-color: ${props => (props.bgColor ? '#0f0f0f ' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`
