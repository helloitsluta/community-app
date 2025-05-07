import { Link, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useSelector } from "react-redux"
import type { RootState } from "../store"
import pages from "../pages"

const NavBar: React.FC = () => {
  const navigate = useNavigate()
  const { user } = useSelector((state: RootState) => state.auth)

  const handleLogout = async () => {
    await signOut(auth)
    navigate("/login")
  }

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        {pages
          .filter((p) => p.showOnNavBar)
          .map((p) => (
            <Link
              key={p.path}
              to={p.path}
              className="text-lg font-semibold hover:underline"
            >
              {p.title}
            </Link>
          ))}
      </div>

      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm">
              Hello, {user.displayName || user.email}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-3 py-1 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="bg-blue-500 px-3 py-1 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}

export default NavBar
