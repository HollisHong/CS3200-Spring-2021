import service from "./movie-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const MovieList = () => {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        service.findAllMovies()
            .then((movies) => {
                setMovies(movies)
                // console.log(movies)
            })
    }, [])
    return (
        <div>
            <h2>Movie List</h2>
            <ul className="list-group">
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
            {JSON.stringify(movies)}
        </div>
    )
}

export default MovieList