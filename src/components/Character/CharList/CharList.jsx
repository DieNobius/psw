import CharCard from './CharCard/CharCard'
import './CharList.css'

function CharList({ characters }) {
	return (
		<div className="posts__container">
			<div className="posts__inner">
				{characters.map((post, index) => (
					<CharCard key={index} {...post} />
				))}
			</div>
		</div>
	)
}

export default CharList
