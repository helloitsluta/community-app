import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout: React.FC = () => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
)

export default Layout
