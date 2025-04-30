import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Mitmachen from "./pages/Mitmachen"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mitmachen" element={<Mitmachen />} />
    </Routes>
  );
}

export default App;