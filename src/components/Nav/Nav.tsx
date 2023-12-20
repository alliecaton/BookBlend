import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="px-6 py-3 w-full flex justify-between bg-cream border-b border-black">
      <Link className="text-lg" to="/">
        Home
      </Link>
      <Link className="text-lg" to="/login">
        Login
      </Link>
    </div>
  )
}

export default Nav
