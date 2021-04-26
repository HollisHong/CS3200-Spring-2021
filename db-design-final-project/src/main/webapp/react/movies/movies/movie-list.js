import service from "./movie-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const MovieList = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        service.findAllMovies()
            .then((movies) => {
                setMovies(movies)
            })
    }, [])


    return (
        <div>
            <h2>Movie List</h2>

                <ul>

                {
                    movies.map((movie) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/movies/${movie.id}`}>
                                    {movie.title}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MovieList