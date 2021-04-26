import service from "./review-service"

const {useEffect, useState} = React
const {useParams, useHistory} = ReactRouterDOM

const ReviewEditor = () => {
    const [review, setReview] = useState([])
    const {rid} = useParams()
    const history = useHistory()
    useEffect(() => {
        service.findReviewById(rid)
            .then((review) => {
                setReview(review)
            })
    }, [])
    const updateReview = () => {
        service.updateReview(review.id, review)
            .then(() => history.goBack())
    }

    const deleteReview = () => {
        service.deleteReview(review.id)
            .then(() => history.goBack())
    }

    return (
        <div>
            <h2>Review Editor {rid}</h2>
            <label>ID</label>
            <input value={review.id} className="form-control"/>
            <label>Post</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReview({...review, post: newValue})
                }}
                value={review.post} className="form-control"/>

            <label>Rating</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReview({...review, rating: newValue})
                }}
                value={review.rating} className="form-control"/>

            <label>Movie</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setMovie({...review, movie: newValue})
                }}
                value={review.movie} className="form-control"/>



            <button onClick={deleteReview}>Delete</button>

            <button onClick={updateReview}>
                Save
            </button>
            <button onClick={() => {
                history.goBack()
            }}>Cancel</button>
        </div>
    )
}

export default ReviewEditor;