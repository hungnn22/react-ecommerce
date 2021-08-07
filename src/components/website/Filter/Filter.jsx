const Filter = ({list, onFilter}) => {


    return (
        <select className="form-control bg-default"
            onChange={e => onFilter(e.target.value)}
        >
            <option value="">All</option>
            {list.map(item => (
                <option key={item.id}
                    value={item.id}
                >{item.name}</option>
            ))}
        </select>
    )
}

export default Filter
