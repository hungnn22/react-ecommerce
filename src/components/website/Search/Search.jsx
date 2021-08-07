import { useRef } from "react"

const Search = ({ onSearch }) => {

    const searchRef = useRef(null)

    const handleSearch = e => {
        const values = e.target.value
        console.log(values);
        if (searchRef.current) {
            clearTimeout(searchRef)
        }
        searchRef.current = setTimeout(() => {
            onSearch && onSearch(values)
        }, 300)
    }

    return (
        <div className="form-group">
            <input className="form-control" placeholder="Search here..."
                onChange={handleSearch}
            />
        </div>
    )
}

export default Search
