import { Link, NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../img/logo.svg'

function Header() {
	return (
		<div className="header__inner">
			<Link to="/">
				<img className="logo" src={logo} alt="" />
			</Link>
			<div className="menu">
				<NavLink className="menu__link menu__home" to="/">
					Home
				</NavLink>
				<NavLink className="menu__link menu__characters" to="/characters">
					Characters
				</NavLink>
			</div>
		</div>
	)
}

export default Header
