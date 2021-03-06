import service from "./movie-service"

const {useEffect, useState} = React
const {useParams, useHistory} = ReactRouterDOM
const {Link} = ReactRouterDOM

const MovieEditor = () => {
    const [movie, setMovie] = useState([])
    const [reviews, setReviews] = useState([])
    const [newReview, setNewReview] = useState([])
    const {mid} = useParams()
    const history = useHistory()
    useEffect(() => {
        service.findMovieById(mid)
            .then((movie) => {
                setMovie(movie)
            })
    }, [])
    useEffect(() => {
        service.findAllReviewsForMovie(mid)
            .then((reviews) => {
                setReviews(reviews)
            })
    }, [])


    const createReviewForMovie = (mid,newReview) =>
        service.createReviewForMovie(mid,newReview)
            .then(newReview => {
                setNewReview({post:'',rating: 0})
                setReviews(reviews => ([...reviews, newReview]))
            })

    const updateMovie = () => {
        service.updateMovie(movie.id, movie)
            .then(() => history.goBack())
    }

    const deleteMovie = () => {
        service.deleteMovie(movie.id)
            .then(() => history.goBack())
    }

    return (
        <div>
            <div>
                <h2>Movie Editor {mid}</h2>
                <label>ID</label>
                <input value={movie.id} className="form-control"/>
                <label>Title</label>
                <input
                    onChange={(e) => {
                        const newValue = e.target.value
                        setMovie({...movie, title: newValue})
                    }}
                    value={movie.title} className="form-control"/>

                <label>Plot</label>
                <input
                    onChange={(e) => {
                        const newValue = e.target.value
                        setMovie({...movie, plot: newValue})
                    }}
                    value={movie.plot} className="form-control"/>

                <label>Genre (One of SCIFI, LOVE, HORROR, and COMEDY</label>
                <input
                    onChange={(e) => {
                        const newValue = e.target.value
                        setMovie({...movie, genre: newValue})
                    }}
                    value={movie.genre} className="form-control"/>

                <label>Director</label>
                    <Link to={`/directors/${movie.directorId}`}
                          className="form-control">
                        {movie.directorName}
                    </Link>


                <button onClick={deleteMovie}>Delete</button>
                <button onClick={updateMovie}>
                    Save
                </button>
                <button onClick={() => {
                    history.goBack()
                }}>Cancel</button>
            </div>
            <br/>
            <div>
                <h3> Review List Of Movie {mid}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col">


                                <label>Post</label>
                                <input placeholder="post"
                                       title="Please enter review Post"
                                       className="form-control"
                                       value={newReview.post}
                                       onChange={(e) =>
                                           setNewReview(newReview => ({...newReview, post: e.target.value}))}/>

                                <label>Rating</label>
                                <input placeholder="Rating"
                                       title="Please enter rating"
                                       className="form-control"
                                       value={newReview.rating}
                                       onChange={(e) =>
                                           setNewReview(newReview => ({...newReview, rating: e.target.value}))}/>
                            </div>
                            <div className="col-3">
                                <i className="fas fa-plus fa-2x float-right" onClick={() => createReviewForMovie(mid,newReview)}></i>
                            </div>
                        </div>
                    </li>
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
        </div>
    )
}

export default MovieEditor;