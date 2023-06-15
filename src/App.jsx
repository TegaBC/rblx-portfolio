import { Routes, Route } from "react-router-dom"
import HomePage from './pages/home'
import ContactPage from "./pages/contact"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
    </div>
  )
}

export default App