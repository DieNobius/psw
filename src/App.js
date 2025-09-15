import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './AppRoute'
import ConditionalHeader from './components/Header/ConditionalHeader/ConditionalHeader'
import './App.css'

function App() {
	return (
		<BrowserRouter>
			<ConditionalHeader />
			<AppRoutes />
		</BrowserRouter>
	)
}

export default App
