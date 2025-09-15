import { useLocation } from 'react-router-dom'
import Header from '../Header'

function ConditionalHeader() {
	const location = useLocation()
	const pathsWithoutHeader = ['/', '/characters']
	const isHeaderShown = pathsWithoutHeader.includes(location.pathname)

	if (isHeaderShown) {
		return <Header />
	} else {
		return null
	}
}

export default ConditionalHeader
