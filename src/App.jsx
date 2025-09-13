import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import NavigationDesktop from './components/NavigationDesktop.jsx'

function App() {
  return (
    <>
      <div className="container mx-auto max-w-7xl">
        <NavigationDesktop />
      </div>
    </>
  )
}

export default App
