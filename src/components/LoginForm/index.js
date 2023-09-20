import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'
import {
  LoginFormPageContainer,
  LoginCardContainer,
  WebsiteLogo,
  FormContainer,
  InputLabelContainer,
  FormLabel,
  FormInput,
  CheckboxLabelContainer,
  CheckboxLabel,
  Checkbox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onLoginSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 3})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onClickCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userCredentials = {username, password}
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userCredentials),
    }
    const response = await fetch(loginApiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const accessToken = Cookies.get('jwt_token')
    if (accessToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const {
            username,
            password,
            showPassword,
            showErrorMsg,
            errorMsg,
          } = this.state
          const websiteLogo = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginFormPageContainer bgColor={isDarkTheme}>
              <LoginCardContainer bgColor={isDarkTheme}>
                <WebsiteLogo src={websiteLogo} alt="website logo" />
                <FormContainer onSubmit={this.onClickLogin}>
                  <InputLabelContainer>
                    <FormLabel htmlFor="username" fontColor={isDarkTheme}>
                      USERNAME
                    </FormLabel>
                    <FormInput
                      id="username"
                      type="text"
                      value={username}
                      placeholder="Username"
                      fontColor={isDarkTheme}
                      bgColor={isDarkTheme}
                      onChange={this.onChangeUsername}
                    />
                  </InputLabelContainer>
                  <InputLabelContainer>
                    <FormLabel htmlFor="password" fontColor={isDarkTheme}>
                      PASSWORD
                    </FormLabel>
                    <FormInput
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      placeholder="Password"
                      fontColor={isDarkTheme}
                      bgColor={isDarkTheme}
                      onChange={this.onChangePassword}
                    />
                  </InputLabelContainer>
                  <CheckboxLabelContainer>
                    <Checkbox
                      type="checkbox"
                      id="showPassword"
                      onClick={this.onClickCheckbox}
                    />
                    <CheckboxLabel
                      htmlFor="showPassword"
                      fontColor={isDarkTheme}
                    >
                      Show Password
                    </CheckboxLabel>
                  </CheckboxLabelContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </FormContainer>
              </LoginCardContainer>
            </LoginFormPageContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default LoginForm
