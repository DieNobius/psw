import { useState, useEffect } from 'react'
import { getCharacterList } from '../../services/getCharacterList'
import CharLength from '../../components/Character/CharLength/CharLength'
import CharList from '../../components/Character/CharList/CharList'
import Filter from '../../components/Filter/Filter'
import { charactersPerPage } from '../../constants/constants'
import './CharactersPage.css'
import Pagination from '../../components/Pagination/Pagination'
import CharModal from '../../components/Character/CharList/CharModal/CharModal'
import { processValue } from './../../helper/processValue'
import Search from '../../components/Search/Search'

function CharactersPage() {
	const [allCharacters, setAllCharacters] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [eyeColorFilter, setEyeColorFilter] = useState('all')
	const [selectedCharacter, setSelectedCharacter] = useState(null)
	const [searchQuery, setSearchQuery] = useState('')

	const handleSearchChange = (query) => {
		setSearchQuery(query)
		setCurrentPage(1)
	}

	const openModal = (character) => {
		setSelectedCharacter(character)
	}

	const closeModal = () => {
		setSelectedCharacter(null)
	}

	const handleEyeColorChange = (color) => {
		setEyeColorFilter(color)
		setCurrentPage(1)
	}

	const filteredCharacters = allCharacters.filter((character) => {
		const matchesEyeColor =
			eyeColorFilter === 'all' || character.eye_color === eyeColorFilter
		const matchesSearch = character.name
			.toLowerCase()
			.includes(searchQuery.toLowerCase())
		return matchesEyeColor && matchesSearch
	})

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
				const response = await getCharacterList()
				const data = await response.json()
				const result = data.map((character) => {
					const processedCharacter = {}
					Object.entries(character).forEach(([key, value]) => {
						processedCharacter[key] = processValue(value)
					})
					return processedCharacter
				})

				setAllCharacters(result)
			} catch (error) {
				console.log(error)
			}
		}
		asyncFetchCharactreList()
	}, [])

	return (
		<>
			{selectedCharacter && (
				<CharModal character={selectedCharacter} onClose={closeModal} />
			)}
			<div className="char__inner">
				<CharLength length={filteredCharacters.length} />
				<Filter
					eyeColorFilter={eyeColorFilter}
					handleEyeColorChange={handleEyeColorChange}
				/>
				<Search value={searchQuery} onChange={handleSearchChange} />
				<CharList characters={currentCharacters} onCharacterClick={openModal} />
				<Pagination
					prevPage={prevPage}
					nextPage={nextPage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			</div>
		</>
	)
}

export default CharactersPage
