import service from "./review-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const ReviewList = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        service.findAllReviews()
            .then((reviews) => {
                setReviews(reviews)
                // console.log(reviews)
            })
    }, [])
    return (
        <div>
            <h2>Review List</h2>
            <ul className="list-group">
                {
                    reviews.map((review) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/reviews/${review.id}`}>
                                    {review.post}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

export default ReviewList