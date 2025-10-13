import hermImg from '../../../../img/hermaphrodite.svg'
import femaleImg from '../../../../img/female.svg'
import maleImg from '../../../../img/male.svg'
import { getGenderClass } from '../../../../helper/getGenderClass'
import './CharModal.css'

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
							src={getCharacerImage(character.gender)}
							alt="Character"
						/>
						<div className="character-badges">
							{character.gender && (
								<div
									className={`char__gender ${getGenderClass(character.gender)}`}
								>
									{character.gender}
								</div>
							)}
							{character.birth_year && (
								<div className="char__year">{character.birth_year}</div>
							)}
						</div>
					</div>
					<div className="character-info-section">
						<p className="character-name">{character.name}</p>
						<div className="character-description">
							{character.hair_color && `hair color: ${character.hair_color}`}
							<br />
							{character.skin_color && `skin color: ${character.skin_color}`}
						</div>
						<div className="character-stats">
							{character.height && (
								<div className="stat-item">
									<div className="stat-item-container">
										<div className="char__common__number-modal">
											<div className="stat-item-log">{character.height}</div>
										</div>

										<div className="stat-item-name">height</div>
									</div>
								</div>
							)}
							{character.mass && (
								<div className="stat-item">
									<div className="stat-item-containers">
										<div className="char__common__number-modal">
											<div className="stat-item-log">{character.mass}</div>
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
