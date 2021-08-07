const Sort = ({onSort}) => {
    return (
        <select onChange={(e) => onSort(e.target.value)} className="form-control bg-default">
            <option value="_sort=''''&_order=''">None</option>
            <option value="_sort=price&_order=asc">Price: Low to high</option>
            <option value="_sort=price&_order=desc">Price: High to low</option>
        </select >
    )
}

export default Sort
