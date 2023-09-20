import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  changeTheme: () => {},
})

export default NxtWatchContext
