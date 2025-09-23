import { Link } from 'react-router-dom'
import './HomePageButton.css'

function HomePageButton() {
	return (
		<Link to="/characters">
			<button className="btn">See more...</button>
		</Link>
	)
}

export default HomePageButton
