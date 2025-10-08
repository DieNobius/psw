import './CharModal.css'
import herm from '../../../../img/hermaphrodite.svg'

function CharModal(props) {
	return (
		<div className="char-modal">
			<div className="modal-overlay">
				<div className="modal-content">
					<div className="character-image-section">
						<img className="character-image" src={herm} alt="Character" />
						<div className="character-badges">
							<div className="gender-badge">male</div>
							<div className="type-badge">model</div>
						</div>
					</div>
					<div className="character-info-section">
						<p className="character-name">name</p>
						<div className="character-description">
							hair color:<br></br>
							skin color:
						</div>
						<div className="character-stats">
							<div className="stat-item">height</div>
							<div className="stat-item">mass</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CharModal
