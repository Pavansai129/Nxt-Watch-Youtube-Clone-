import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
  likedVideos: [],
  updateLikedVideos: () => {},
  dislikedVideos: [],
  updateDislikedVideos: () => {},
  savedVideos: [],
  updateSavedVideos: () => {},
})

export default NxtWatchContext
