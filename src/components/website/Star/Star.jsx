import StarRating from 'react-star-ratings'

const Star = ({rating}) => {
    return (
        <StarRating
            rating={rating}
            starRatedColor="#e7ab3c"
            starDimension="16px"
            starSpacing="4px"
        />
    )
}

export default Star

