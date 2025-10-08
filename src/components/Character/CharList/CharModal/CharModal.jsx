import './CharModal.css'
import herm from '../../../../img/hermaphrodite.svg'

function CharModal(props) {
	return (
		<div className="container-test">
			<div className="test">
				<div className="test-2">
					<div className="test-3">
						<img className="img" src={herm} alt="" />
						<div className="cont">
							<div className="male-test">male</div>
							<div className="model">model</div>
						</div>
					</div>
					<div className="test-4">
						<p className="name-test">name</p>
						<div className="test-5">
							hair color:<br></br>
							skin color:
						</div>
						<div className="test-6-cont">
							<div className="test-7">height</div>
							<div className="test-8">mass</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CharModal
