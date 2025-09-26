import { useState, useEffect } from 'react'
import { getCharacterList } from '../../services/getCharacterList'
import CharLength from '../../components/Character/CharLength/CharLength'
import CharList from '../../components/Character/CharList/CharList'
import Filter from '../../components/Filter/Filter'
import { charactersPerPage } from '../../constants/constants'
import './CharactersPage.css'
import Pagination from '../../components/Pagination/Pagination'

function CharactersPage() {
	const [allCharacters, setAllCharacters] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [eyeColorFilter, setEyeColorFilter] = useState('all') //

	const handleEyeColorChange = (color) => {
		setEyeColorFilter(color)
		setCurrentPage(1)
	}

	const filteredCharacters =
		eyeColorFilter === 'all'
			? allCharacters
			: allCharacters.filter(
					(character) => character.eye_color === eyeColorFilter
			  )

	const indexOfLastCharacter = currentPage * charactersPerPage
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
	const currentCharacters = filteredCharacters.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	)
	const totalPages = Math.ceil(filteredCharacters.length / charactersPerPage)

	const nextPage = () =>
		currentPage < totalPages && setCurrentPage(currentPage + 1)
	const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1)

	useEffect(() => {
		const asyncFetchCharactreList = async () => {
			try {
				const result = await getCharacterList().then((res) => res.json())
				setAllCharacters(result)
			} catch (error) {
				console.log(error)
			}
		}
		asyncFetchCharactreList()
	}, [])

	return (
		<div className="char__inner">
			<CharLength length={filteredCharacters.length} />
			<Filter
				eyeColorFilter={eyeColorFilter}
				handleEyeColorChange={handleEyeColorChange}
			/>
			<CharList characters={currentCharacters} />
			<Pagination
				prevPage={prevPage}
				nextPage={nextPage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</div>
	)
}

export default CharactersPage
