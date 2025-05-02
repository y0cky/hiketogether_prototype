import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mitmachen from "./pages/Mitmachen"

function App() {
  const [isUrban, setIsUrban] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Home isUrban={isUrban} setIsUrban={setIsUrban} />} />
      <Route path="/mitmachen" element={<Mitmachen />} />
    </Routes>
  )
}

export default App

