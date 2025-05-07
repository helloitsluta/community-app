import { BrowserRouter, Routes, Route } from "react-router-dom"
import CounterPage from "./pages/CounterPage"
import LoginPage from "./pages/LoginPage"
import BoardPage from "./pages/BoardPage"
import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/board" element={<BoardPage />} />
        <Route path="/counter" element={<CounterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
