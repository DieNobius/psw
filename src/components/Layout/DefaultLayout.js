import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import CharModal from '../Character/CharList/CharModal/CharModal'

const DefaultLayout = () => {
	return (
		<>
			<CharModal />
			<Header />
			<main>
				<Outlet /> {}
			</main>
		</>
	)
}

export default DefaultLayout
