import './CharCard.css'
import { getGenderClass } from '../../../../helper/getGenderClass'

function CharCard(props) {
	const { onCharacterClick, ...characterData } = props

	const genderClass = getGenderClass(characterData.gender)

	return (
		<div
			onClick={() => onCharacterClick(characterData)}
			className="char__container"
		>
			<h3 className="char__name">
				{characterData.name || 'Unknown Character'}
			</h3>

			<div className="char__number__inner">
				{characterData.height && (
					<p className="char__common__number">{characterData.height}</p>
				)}
				{characterData.mass && (
					<p className="char__common__number">{characterData.mass}</p>
				)}
			</div>

			<div className="char__string__inner">
				{characterData.height && <p className="char__common__string">height</p>}
				{characterData.mass && <p className="char__common__string">mass</p>}
			</div>

			<div className="char__info__inner">
				{characterData.gender && (
					<p className={`char__gender ${genderClass}`}>
						{characterData.gender}
					</p>
				)}
				{characterData.birth_year && (
					<p className="char__year">{characterData.birth_year}</p>
				)}
			</div>
		</div>
	)
}

export default CharCard
