function Post({
	name,
	gender,
	height,
	mass,
	hair_color,
	eye_color,
	skin_color,
}) {
	return (
		<div>
			<h2>{name}</h2>
			<small>{gender}</small>
			<small>{height}</small>
			<small>{mass}</small>
			<small>{hair_color}</small>
			<small>{eye_color}</small>
			<small>{skin_color}</small>
		</div>
	)
}

export default Post
