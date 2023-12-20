import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="px-6 py-3 w-full flex justify-between">
      <Link className="text-lg text-white" to="/">
        Home
      </Link>
      <Link className="text-lg text-white" to="/login">
        Login
      </Link>
    </div>
  )
}

export default Nav
