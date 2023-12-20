import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="w-full flex justify-between">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Nav
