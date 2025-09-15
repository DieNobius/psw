import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import HomePage from './Pages/HomePage/HomePage'
import CharactersPage from './Pages/CharactersPage/CharactersPage'

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/characters" element={<CharactersPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	)
}

export default AppRoutes
