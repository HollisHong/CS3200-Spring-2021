import service from "./movie-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const[newMovie, setNewMovie] = useState([])
    const[newMovieDirector, setNewMovieDirector] = useState([])
    useEffect(() => {
        service.findAllMovies()
            .then((movies) => {
                setMovies(movies)
                // console.log(movies)
            })
    }, [])

    const createMovie = (newMovieDirector, newMovie) =>
        service.createDirector(newMovieDirector.id, newMovie)
            .then(newMovieDirector => {
                setNewMovieDirector({id:null})
            })
            .then(newMovie => {
                setNewMovie({genre:'',plot:'',title:''})
                setMovies(movies => ([...movies, newMovie]))
            })

    return (
        <div>
            <h2>Movie List</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="title"
                                   title="Please enter the title" className="form-control" value={newMovie.title}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, title: e.target.value}))}/>

                            <input placeholder="plot"
                                   title="Please enter the plot" className="form-control" value={newMovie.plot}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, plot: e.target.value}))}/>


                            <input placeholder="genre"
                                   title="Please enter the genre" className="form-control" value={newMovie.genre}
                                   onChange={(e) => setNewMovie(newMovie => ({...newMovie, genre: e.target.value}))}/>

                            <input placeholder="director"
                                   title="Please enter the director id" className="form-control" value={newMovieDirector.id}
                                   onChange={(e) => setnewMovieDirector(newMovie => ({...newMovieDirector, id: e.target.value}))}/>

                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createDirector(newDirector)}></i>
                        </div>
                    </div>
                </li>
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