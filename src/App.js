import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './Pages/NotFound/NotFound'
import HomePage from './Pages/HomePage/HomePage'
import CharactersPage from './Pages/CharactersPage/CharactersPage'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="*" element={<NotFound />} />
					<Route path="/" element={<HomePage />} />
					<Route path="/characters" element={<CharactersPage />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
