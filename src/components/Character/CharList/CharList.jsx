import CharCard from './CharCard/CharCard'
import './CharList.css'

function CharList({ characters, onCharacterClick }) {
	return (
		<div className="posts__container">
			<div className="posts__inner">
				{characters.map((post, index) => (
					<CharCard key={index} {...post} onCharacterClick={onCharacterClick} />
				))}
			</div>
		</div>
	)
}

export default CharList
