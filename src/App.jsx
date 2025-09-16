import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavigationDesktop from './components/NavigationDesktop.jsx'
import NavigationMobile from './components/NavigationMobile.jsx'

function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <NavigationMobile />
      </div>
    </>
  )
}

export default App
