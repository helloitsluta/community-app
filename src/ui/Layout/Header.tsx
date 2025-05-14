import { Menu, X } from "lucide-react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import pages from "../../pages"
import { useSelector } from "react-redux"
import type { RootState } from "../../store"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"

const Header: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state: RootState) => state.auth)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/")
  }

  return (
    <header className="bg-white shadow-sm relative px-4 lg:px-6 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold text-gray-800">
        Luta - Community App
      </Link>

      {/* Desktop - Nav Menu */}
      <nav className="flex gap-8 max-lg:hidden">
        {pages
          .filter((page) => page.showOnNav)
          .map((p) => (
            <Link to={p.path} key={p.title} className="text-gray-600">
              {p.title}
            </Link>
          ))}
      </nav>

      {/* Desktop - User Menu */}
      <div className="max-lg:hidden">
        {user ? (
          <div className="flex items-center gap-2">
            <p className="text-sm">{user.displayName || user.email}</p>
            <button
              onClick={handleLogout}
              className="text-red-600 text-sm cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link
              to="/login"
              className="bg-blue-600 text-white rounded-lg px-4 py-1 leading-tight text-sm"
            >
              Login
            </Link>
          </div>
        )}
      </div>

      {/* Mobile */}
      <button onClick={toggleMenu} className="lg:hidden focus:outline-none">
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isMenuOpen && (
        <nav
          className="absolute top-full left-0 p-6 bg-white mt-1 w-full shadow-sm"
          onClick={toggleMenu}
        >
          <div className="flex justify-between">
            {/* Mobile - Nav Menu */}
            <div className="flex flex-col gap-4">
              {pages
                .filter((page) => page.showOnNav)
                .map((p) => (
                  <Link to={p.path} key={p.title} className="text-gray-600">
                    {p.title}
                  </Link>
                ))}
            </div>

            {/* Mobile - User Menu */}
            {user ? (
              <div className="flex flex-col items-end">
                <p className="text-sm">{user.displayName || user.email}</p>
                <button onClick={handleLogout} className="text-red-600 text-sm">
                  Logout
                </button>
              </div>
            ) : (
              <div>
                <Link
                  to="/login"
                  className="bg-blue-600 text-white rounded-lg px-4 py-1 leading-tight"
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header
