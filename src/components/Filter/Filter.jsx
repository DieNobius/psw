import './Filter.css'

function Filter({ eyeColorFilter, handleEyeColorChange }) {
	return (
		<div className="filter">
			<label className="filter__label">Color eye</label>
			<select
				value={eyeColorFilter}
				onChange={(e) => handleEyeColorChange(e.target.value)}
				className="filter__select"
			>
				<option value="all">All</option>
				<option value="brown">brown</option>
				<option value="red">red</option>
				<option value="white">white</option>
				<option value="blue">blue</option>
			</select>
		</div>
	)
}

export default Filter
