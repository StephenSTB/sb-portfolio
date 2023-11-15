import './App.css'
import { Header, Details, Resume, Contact, Topbar } from './components'

import { useEffect } from "react"

function App() {

  return (
    <div id='App'>
      <Topbar />
      <Header />
      <Details />
      <Resume />
      <Contact />
    </div>
  )
}

export default App
