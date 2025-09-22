// import CharTable from '../../CharTable/CharTable'
import './CharCard.css'

// {name === 'n/a' ? null :

function CharCard({ name, gender, height, mass, birth_year }) {
	const genderClass =
		gender === 'male'
			? 'male'
			: gender === 'female'
			? 'female'
			: gender === 'hermaphrodite'
			? 'hermaphrodite'
			: 'unknown'

	return (
		<div className="char__container">
			<h3 className="char__name ">{name}</h3>
			<div className="char__number__inner">
				{height === 'unknown' ? null : (
					<p className="char__common__number">{height}</p>
				)}
				{mass === 'unknown' ? null : (
					<p className="char__common__number">{mass}</p>
				)}
			</div>
			<div className="char__string__inner">
				{height === 'unknown' ? null : (
					<p className="char__common__string">height</p>
				)}
				{mass === 'unknown' ? null : (
					<p className="char__common__string">mass</p>
				)}
			</div>
			<div className="char__info__inner">
				{gender === 'n/a' ? null : (
					<p className={`char__gender ${genderClass}`}>{gender}</p>
				)}
				{birth_year === 'unknown' ? null : (
					<p className="char__year">{birth_year}</p>
				)}
			</div>
		</div>
	)
}

export default CharCard
