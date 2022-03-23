import { Link } from "react-router-dom"
const NavBar = () => {
  return (
    <div>
      <h2>navbar</h2>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/abcd'>Page</Link>
    </div>
  )
}

export default NavBar