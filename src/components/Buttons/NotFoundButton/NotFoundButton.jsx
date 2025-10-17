import './NotFoundButton.css'

function NotFoundButton({ onClick, children }) {
	return (
		<button className="not-found-btn" onClick={onClick}>
			{children || 'Назад'}
		</button>
	)
}

export default NotFoundButton
