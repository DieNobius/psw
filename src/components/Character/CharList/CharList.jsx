import { useState, useEffect } from 'react'
import { getCharacterList } from '../../../services/getCharacterList'
import CharCard from './CharCard/CharCard'

function CharList() {
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
			{posts.map((post, index) => (
				<CharCard key={index} {...post} />
			))}
		</div>
	)
}

export default CharList
