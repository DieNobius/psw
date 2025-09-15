import { Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import HomePage from './Pages/HomePage/HomePage'
import CharactersPage from './Pages/CharactersPage/CharactersPage'
import DefaultLayout from './components/Layout/DefaultLayout'
import SimpleLayout from './components/Layout/SimpleLayout'

function AppRoutes() {
	return (
		<Routes>
			<Route element={<DefaultLayout />}>
				<Route path="/" element={<HomePage />} />
				<Route path="/characters" element={<CharactersPage />} />
			</Route>

			<Route element={<SimpleLayout />}>
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	)
}

export default AppRoutes
