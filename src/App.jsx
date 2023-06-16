import { Routes, Route } from "react-router-dom"
import HomePage from './pages/home'
import ContactPage from "./pages/contact"
import PortfolioPage from "./pages/portfolio"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
      </Routes>
    </div>
  )
}

export default App