import React from 'react'
import './Home.css'
import Album from '../Album/Album'
function Dashboard() {
  return (
    <div>
      <div className="menu-bar">

      </div>
      <div className="workspace">
          <Album></Album>
      </div>
      <div className="song-player">
          <div></div>
      </div>
    </div>
  )
}

export default Dashboard