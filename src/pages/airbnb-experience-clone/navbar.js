import AirbnbLogo from '../../icons/airbnb-logo.svg';
import './NavBar.css'
const NavBAr = () => {
  return (
    <div className='navbar'>
      <img src={AirbnbLogo} alt="logo" className='navbar-img'/>
    </div>
  )
}

export default NavBAr;