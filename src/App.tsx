import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import pages from "./pages"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {pages.map((p) => {
          const Component = p.component
          if (p.path.startsWith("/board")) {
            return (
              <Route path="/board" key="board">
                <Route index element={<Component />} />
                <Route path="create" element={<p.component />} />
              </Route>
            )
          }
          return <Route key={p.path} path={p.path} element={<Component />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
