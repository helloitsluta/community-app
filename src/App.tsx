import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./ui/NavBar/NavBar"
import pages from "./pages"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {pages.map((p) => {
          if (p.path === "/board") {
            return (
              <Route path="board" key="board">
                <Route index element={<p.component />} /> {/* BoardPage */}
                {p.children?.map((child) => {
                  return (
                    <Route
                      key={child.path}
                      path={child.path}
                      element={<child.component />}
                    />
                  )
                })}
              </Route>
            )
          }
          return <Route key={p.path} path={p.path} element={<p.component />} />
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
