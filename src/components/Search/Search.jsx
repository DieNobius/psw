import './Search.css'

function Search({ value, onChange }) {
	return (
		<div className="search">
			<label className="search__label">Search</label>
			<input
				type="text"
				placeholder="Введите имя персонажа"
				value={value}
				onChange={(e) => onChange(e.target.value)}
				className="search__input"
			/>
		</div>
	)
}

export default Search
