import { useState, useEffect } from 'react'
import { getCharacterList } from '../../services/getCharacterList'
import CharLength from '../../components/Character/CharLength/CharLength'
import CharList from '../../components/Character/CharList/CharList'
import ColorEye from '../../components/ColorEye/ColorEye'
import Language from '../../components/Language/Language'
import './CharactersPage.css'

function CharactersPage() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		const asyncFetchCharactreList = async () => {
			try {
				const result = await getCharacterList().then((res) => res.json())
				setPosts(result)
			} catch (error) {
				console.log(error)
			}
		}
		asyncFetchCharactreList()
	}, [])

	return (
		<div>
			<Language />
			<div className="char__inner">
				<CharLength length={posts.length} />
				<ColorEye />
				<CharList characters={posts} />
			</div>
		</div>
	)
}

export default CharactersPage
