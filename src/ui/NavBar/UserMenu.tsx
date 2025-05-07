import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase"
import type { RootState } from "../../store"

interface UserMenuProps {
  toggleMenu?: () => void
}

const UserMenu: React.FC<UserMenuProps> = ({ toggleMenu }) => {
  const { user } = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

  // Handle user logout
  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  // Handle mobile menu toggle
  const handleClick = () => {
    if (toggleMenu) toggleMenu()
  }

  return (
    <div className="flex flex-col md:flex-row items-center space-x-4">
      {user ? (
        <>
          <span className="text-gray-800">
            {user.displayName || user.email}
          </span>
          <button
            onClick={() => {
              handleLogout()
              handleClick()
            }}
            className="text-red-600 hover:text-red-800"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link
            to="/login"
            onClick={handleClick}
            className="text-blue-600 hover:text-blue-800"
          >
            Login
          </Link>
        </>
      )}
    </div>
  )
}

export default UserMenu
