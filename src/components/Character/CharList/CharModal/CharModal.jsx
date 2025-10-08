import './CharModal.css'
import herm from '../../../../img/hermaphrodite.svg'
import { useMemo } from 'react'
import { processValue } from '../../../../helper/processValue'

function CharModal(props) {
	const charData = useMemo(() => {
		const processed = {}
		Object.entries(props).forEach(([key, value]) => {
			processed[key] = processValue(value)
		})
		return processed
	}, [props])

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
						<p className="name-test">{charData.name}</p>
						<div className="test-5">
							hair color:<br></br>
							skin color:
						</div>
						<div className="test-6-cont">
							<div className="test-7">h={charData.height}</div>
							<div className="test-8">mass</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CharModal
