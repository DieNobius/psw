import { useState, useEffect } from 'react'
import { getCharacterList } from '../../services/getCharacterList'
import CharLength from '../../components/Character/CharLength/CharLength'
import CharList from '../../components/Character/CharList/CharList'
import Filter from '../../components/Filter/Filter'
import './CharactersPage.css'

function CharactersPage() {
	const [allCharacters, setAllCharacters] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [charactersPerPage, setCharactersPerPage] = useState(9)

	const indexOfLastCharacter = currentPage * charactersPerPage
	const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage
	const currentCharacters = allCharacters.slice(
		indexOfFirstCharacter,
		indexOfLastCharacter
	)
	const totalPages = Math.ceil(allCharacters.length / charactersPerPage)

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
			<CharLength length={allCharacters.length} />
			<Filter />
			<CharList characters={currentCharacters} />
			<div className="pagination">
				<button
					className="pagination__btn"
					onClick={prevPage}
					disabled={currentPage === 1}
				>
					Назад
				</button>
				<span className="pagination__info">
					Страница {currentPage} из {totalPages}
				</span>
				<button
					className="pagination__btn"
					onClick={nextPage}
					disabled={currentPage === totalPages}
				>
					Вперед
				</button>
			</div>
		</div>
	)
}

export default CharactersPage
