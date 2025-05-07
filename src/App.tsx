import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>홈</div>} />
        <Route path="/login" element={<div>로그인</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
