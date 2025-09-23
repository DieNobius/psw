export const getGenderClass = (gender) => {
	if (!gender) return 'unknown'

	switch (gender) {
		case 'male':
			return 'male'
		case 'female':
			return 'female'
		case 'hermaphrodite':
			return 'hermaphrodite'
		default:
			return 'unknown'
	}
}
