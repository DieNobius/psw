import PaginationButton from '../Buttons/PaginationButton/PaginationButton'

function Pagination({ prevPage, nextPage, currentPage, totalPages }) {
	return (
		<div className="pagination">
			<PaginationButton
				children="Назад"
				newClass="pagination__btn"
				onClick={prevPage}
				disabled={currentPage === 1}
			/>
			<span className="pagination__info">
				Страница {currentPage} из {totalPages}
			</span>
			<PaginationButton
				children="Вперед"
				newClass="pagination__btn"
				onClick={nextPage}
				disabled={currentPage === totalPages}
			/>
		</div>
	)
}

export default Pagination
