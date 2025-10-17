import './NotFound.css'
import notFoundImg from '../../img/404.svg'
import { useNavigate } from 'react-router-dom'
import NotFoundButton from '../../components/Buttons/NotFoundButton/NotFoundButton'
function NotFound() {
	const navigate = useNavigate()
	const handleGoBack = () => {
		navigate(-1)
	}
	return (
		<div className="container">
			<img className="notFoundImg" src={notFoundImg} alt="" />
			<p className="numb">404</p>
			<NotFoundButton className="not-btn" onClick={handleGoBack} />
		</div>
	)
}

export default NotFound
