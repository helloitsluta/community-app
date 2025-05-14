import { BrowserRouter, Routes, Route } from "react-router-dom"
import pages from "./pages"
import Layout from "./ui/Layout/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
            return (
              <Route key={p.path} path={p.path} element={<p.component />} />
            )
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
