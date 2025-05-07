import { useState } from "react"
import NavMenu from "./NavMenu"
import UserMenu from "./UserMenu"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Toggle mobile menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white border-b shadow-sm px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold text-gray-800">
        Luta
      </Link>

      {/* Desktop menu */}
      <div className="hidden md:flex items-center space-x-4">
        <NavMenu />
        <UserMenu />
      </div>

      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="text-gray-800 md:hidden focus:outline-none"
      >
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu (dropdown) */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t shadow-md flex flex-col items-center space-y-4 py-4 md:hidden">
          <NavMenu toggleMenu={toggleMenu} />
          <UserMenu toggleMenu={toggleMenu} />
        </div>
      )}
    </nav>
  )
}

export default NavBar
