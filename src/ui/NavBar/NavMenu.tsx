import { Link } from "react-router-dom"

interface NavMenuProps {
  toggleMenu?: () => void
}

const NavMenu: React.FC<NavMenuProps> = ({ toggleMenu }) => {
  // Handle menu toggle for mobile
  const handleClick = () => {
    if (toggleMenu) toggleMenu()
  }

  return (
    <div className="flex flex-col md:flex-row items-center space-x-4">
      <Link
        to="/"
        onClick={handleClick}
        className="text-gray-800 hover:text-blue-600"
      >
        Home
      </Link>
      <Link
        to="/board"
        onClick={handleClick}
        className="text-gray-800 hover:text-blue-600"
      >
        Board
      </Link>
    </div>
  )
}

export default NavMenu
