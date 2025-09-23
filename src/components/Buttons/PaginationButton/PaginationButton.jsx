function PaginationButton({ children, newClass, onClick, disabled }) {
	return (
		<button className={newClass} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	)
}

export default PaginationButton
