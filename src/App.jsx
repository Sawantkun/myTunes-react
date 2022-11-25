import React from 'react'
import {Navbar,Overview,Music,Video,Gift,World,Footer} from "./components"

const App = () => {
  return (
    <div>
      <Navbar />
      <Overview />
      <Music />
      <Video />
      <World />
      <Gift />
      <Footer />
    </div>
  )
}

export default App