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
			<nav className="menu">
				<ul className="ul__list">
					<li className="menu__item">
						<Link className="menu__link menu__home" to="/">
							Home
						</Link>
					</li>
					<li className="menu__item">
						<Link className="menu__link menu__characters" to="/characters">
							Characters
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Header
