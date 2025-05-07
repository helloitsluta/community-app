import { BrowserRouter, Routes, Route } from "react-router-dom"
import CounterPage from "./pages/CounterPage"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
