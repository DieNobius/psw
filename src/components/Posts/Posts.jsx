import { useState, useEffect } from 'react'
import { getCharacterList } from '../../services/getCharacterList'
import Post from '../Post/Post'

function Posts() {
	const [posts, setPosts] = useState([])
	useEffect(() => {
		const asyncFetch = async () => {
			try {
				const result = await getCharacterList().then((res) => res.json())
				setPosts(result)
			} catch (error) {
				console.log(error)
			}
		}
		asyncFetch()
	}, [])
	console.log(posts)

	return (
		<div>
			{posts.map((post, index) => (
				<Post key={index} {...post} />
			))}
		</div>
	)
}

export default Posts
