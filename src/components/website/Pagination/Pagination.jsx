const Pagination = ({ filters, onChangePage, totalRows }) => {

    const { _page, _limit } = filters
    const totalPages = Math.ceil(totalRows / _limit)


    return (
        <div className="d-flex align-items-center justify-content-center my-4"
            style={{position: 'absolute', bottom: '0', left: '45%'}}
        >
            <button
                className="btn btn-outline-dark mx-1"
                onClick={() => onChangePage(_page - 1)}
                disabled={_page == 1}
            >Prev </button>
            <button
                className="btn btn-outline-dark mx-1"
                onClick={() => onChangePage(_page + 1)}
                disabled={_page === totalPages}
            >Next</button>
            <span className="mx-2">Page {_page} of {totalPages}</span>
        </div>
    )
}

export default Pagination
