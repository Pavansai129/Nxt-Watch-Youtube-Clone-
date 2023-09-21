import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import NxtWatchContext from './context/NxtWatchContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkTheme: false,
    likedVideos: [],
    dislikedVideos: [],
    savedVideos: [],
  }

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  updateLikedVideos = videoDetails => {
    const {likedVideos, dislikedVideos} = this.state
    const video = likedVideos.find(each => each.id === videoDetails.id)
    if (video) {
      const filteredLikedVideos = likedVideos.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({
        likedVideos: filteredLikedVideos,
      })
    } else {
      const filteredDislikedVideos = dislikedVideos.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({
        likedVideos: [...likedVideos, videoDetails],
        dislikedVideos: filteredDislikedVideos,
      })
    }
  }

  updateDislikedVideos = videoDetails => {
    const {dislikedVideos, likedVideos} = this.state
    const video = dislikedVideos.find(each => each.id === videoDetails.id)
    if (video) {
      const filteredDislikedVideos = dislikedVideos.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({
        dislikedVideos: filteredDislikedVideos,
      })
    } else {
      const filteredLikedVideos = likedVideos.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({
        dislikedVideos: [...dislikedVideos, videoDetails],
        likedVideos: filteredLikedVideos,
      })
    }
  }

  updateSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    const video = savedVideos.find(each => each.id === videoDetails.id)
    if (video) {
      const filteredSavedVideos = savedVideos.filter(
        each => each.id !== videoDetails.id,
      )
      this.setState({savedVideos: filteredSavedVideos})
    } else {
      this.setState({
        savedVideos: [...savedVideos, videoDetails],
      })
    }
  }

  render() {
    const {isDarkTheme, likedVideos, dislikedVideos, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          changeTheme: this.changeTheme,
          likedVideos,
          updateLikedVideos: this.updateLikedVideos,
          dislikedVideos,
          updateDislikedVideos: this.updateDislikedVideos,
          savedVideos,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
