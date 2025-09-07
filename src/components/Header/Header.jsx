import { Link } from 'react-router-dom'
// import './Header.css'
// import logo from '../../img/logo.svg'
// import imgYoda from '../../img/yoda.svg'
// import imgCload from '../../img/cload.svg'

// import imgEllipse from '../../img/ellipse.svg'
function Header() {
	return (
		<div className="header__inner">
			{/* <img className="logo" src={logo} alt="" /> */}
			<Link className="menu__link menu__home" to="/">
				Home
			</Link>
			<Link className="menu__link menu__characters" to="/characters">
				Characters
			</Link>
		</div>
	)
}

export default Header
