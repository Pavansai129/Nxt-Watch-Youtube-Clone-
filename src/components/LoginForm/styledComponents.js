import styled from 'styled-components'

export const LoginFormPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  border: none;
  background-color: ${props => (props.bgColor ? '#181818' : '#f9f9f9')};
`
export const LoginCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 330px;
  height: 430px;
  border: none;
  border-radius: 5px;
  padding: 40px 20px 40px 20px;
  background-color: ${props => (props.bgColor ? '#0f0f0f' : '#ffffff')};
  box-shadow: 0px 0px 20px ${props => (props.bgColor ? '#f9f9f9' : '#181818')};
`

export const WebsiteLogo = styled.img`
  height: 30px;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;
`
export const InputLabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: none;
  margin-bottom: 30px;
`

export const FormLabel = styled.label`
  font-size: 15px;
  font-weight: 900px;
  margin-bottom: 5px;
  color: ${props => (props.fontColor ? '#f8fafc' : '#475569')};
`
export const FormInput = styled.input`
  height: 40px;
  font-size: 15px;
  outline: none;
  border-radius: 3px;
  padding-left: 20px;
  color: ${props => (props.fontColor ? '#f8fafc' : '#475569')};
  border: 1px solid ${props => (props.fontColor ? '#f8fafc' : '#475569')};
  background: none;
`
export const CheckboxLabelContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width: 100%;
  gap: 10px;
  border: none;
  margin-bottom: 20px;
`
export const Checkbox = styled.input`
  transform: scale(1.2);
`
export const CheckboxLabel = styled.label`
  font-size: 18px;
  border: none;
  font-weight: 500px;
  color: ${props => (props.fontColor ? '#f8fafc' : '#181818')};
`

export const LoginButton = styled.button`
  height: 40px;
  font-size: 15px;
  font-weight: 300px;
  border: none;
  outline: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: #4f46e5;
  margin-bottom: 0;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 15px;
  font-weight: 300px;
  margin-top: 5px;
`
