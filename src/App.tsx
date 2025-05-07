import { BrowserRouter, Routes, Route } from "react-router-dom"
import CounterPage from "./pages/CounterPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/login" element={<div>로그인</div>} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
