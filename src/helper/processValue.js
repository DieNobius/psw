export const processValue = (value) => {
	switch (value) {
		case 'unknown':
		case 'n/a':
		case 'none':
			return null
		default:
			return value
	}
}
