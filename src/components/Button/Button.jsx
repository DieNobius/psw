import { Link } from 'react-router-dom'
import './Button.css'

function Button() {
	return (
		<Link to="/characters">
			<button className="btn">See more...</button>
		</Link>
	)
}

export default Button
