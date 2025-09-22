export const processValue = (value) => {
	switch (value) {
		case 'unknown':
		case 'n/a':
			return null
		default:
			return value
	}
}
