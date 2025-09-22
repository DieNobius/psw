import { useMemo } from 'react'
import './CharCard.css'
import { processValue } from '../../../../helper/processValue'
import { getGenderClass } from '../../../../helper/getGenderClass'

function CharCard(props) {
	const charData = useMemo(() => {
		const processed = {}
		Object.entries(props).forEach(([key, value]) => {
			processed[key] = processValue(value)
		})
		return processed
	}, [props])

	const genderClass = getGenderClass(charData.gender)

	return (
		<div className="char__container">
			<h3 className="char__name">{charData.name || 'Unknown Character'}</h3>

			<div className="char__number__inner">
				{charData.height && (
					<p className="char__common__number">{charData.height}</p>
				)}
				{charData.mass && (
					<p className="char__common__number">{charData.mass}</p>
				)}
			</div>

			<div className="char__string__inner">
				{charData.height && <p className="char__common__string">height</p>}
				{charData.mass && <p className="char__common__string">mass</p>}
			</div>

			<div className="char__info__inner">
				{charData.gender && (
					<p className={`char__gender ${genderClass}`}>{charData.gender}</p>
				)}
				{charData.birth_year && (
					<p className="char__year">{charData.birth_year}</p>
				)}
			</div>
		</div>
	)
}

export default CharCard
