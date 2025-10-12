import hermImg from '../../../../img/hermaphrodite.svg'
import femaleImg from '../../../../img/female.svg'
import maleImg from '../../../../img/male.svg'
import { processValue } from '../../../../helper/processValue'
import { getGenderClass } from '../../../../helper/getGenderClass'
import './CharModal.css'
import { useMemo } from 'react'

function CharModal({ character, onClose }) {
	const getCharacerImage = (gender) => {
		switch (gender) {
			case 'male':
				return maleImg
			case 'female':
				return femaleImg
			case 'hermaphrodite':
				return hermImg
			default:
				return hermImg
		}
	}

	const charData = useMemo(() => {
		const processed = {}
		Object.entries(character).forEach(([key, value]) => {
			processed[key] = processValue(value)
		})
		return processed
	}, [character])

	return (
		<div className="char-modal">
			<div className="modal-overlay">
				<div className="modal-content">
					<button onClick={onClose} className="modal-button">
						⨉
					</button>
					<div className="character-image-section">
						<img
							className="character-image"
							src={getCharacerImage(charData.gender)}
							alt="Character"
						/>
						<div className="character-badges">
							{charData.gender && (
								<div
									className={`char__gender ${getGenderClass(charData.gender)}`}
								>
									{charData.gender}
								</div>
							)}
							{charData.birth_year && (
								<div className="char__year">{charData.birth_year}</div>
							)}
						</div>
					</div>
					<div className="character-info-section">
						<p className="character-name">{charData.name}</p>
						<div className="character-description">
							{charData.hair_color && `hair color: ${charData.hair_color}`}
							<br />
							{charData.skin_color && `skin color: ${charData.skin_color}`}
						</div>
						<div className="character-stats">
							{charData.height && (
								<div className="stat-item">
									<div className="stat-item-container">
										<div className="char__common__number-modal">
											<div className="stat-item-log">{charData.height}</div>
										</div>

										<div className="stat-item-name">height</div>
									</div>
								</div>
							)}
							{charData.mass && (
								<div className="stat-item">
									<div className="stat-item-containers">
										<div className="char__common__number-modal">
											<div className="stat-item-log">{charData.mass}</div>
										</div>

										<div className="stat-item-name">mass</div>
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CharModal
