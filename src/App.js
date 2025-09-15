import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoute'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<AppRoutes />
		</BrowserRouter>
	)
}

export default App
