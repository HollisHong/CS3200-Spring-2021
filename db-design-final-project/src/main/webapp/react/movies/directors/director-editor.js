import service from "./director-service"
import Mservice from "../movies/movie-service"

const {useEffect, useState} = React
const {useParams, useHistory} = ReactRouterDOM
const {Link} = ReactRouterDOM

const DirectorEditor = () => {
    const [director, setDirector] = useState([])
    const [movies, setMovies] = useState([])
    const [newMovie, setNewMovie] = useState([])
    const {did} = useParams()
    const history = useHistory()
    useEffect(() => {

        service.findDirectorById(did)
            .then((director) => {
                setDirector(director)
            })
    }, [])
    useEffect(() => {
        service.findAllMoviesForDirector(did)
            .then((movies) => {
                setMovies(movies)
                // console.log(movies)
            })
    }, [])

    const createMovieForDirector = (did,newMovie) =>
        service.createMovieForDirector(did,newMovie)
            .then(newMovie => {
                setNewMovie({title:'',plot:'',genre:''})
                setMovies(movies => ([...movies, newMovie]))
            })


    const updateDirector = () => {
        service.updateDirector(director.id, director)
            .then(() => history.goBack())
    }

    const deleteDirector =() => {
        //console.log("delete here")
        service.deleteDirector(director.id)
            .then(() => history.goBack())
    }
    return (
        <div>
            <h2>Director Editor {did}</h2>
            <label>ID</label>
            <input value={director.id} className="form-control"/>
            <label>Username</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, username: newValue})
                }}
                value={director.username} className="form-control"/>

            <label>FirstName</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, firstName: newValue})
                }}
                value={director.firstName} className="form-control"/>

            <label>LastName</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, lastName: newValue})
                }}
                value={director.lastName} className="form-control"/>

            <label>Age</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, age: newValue})
                }}
                value={director.age} className="form-control"/>

            <label>dateOfBirth</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, dateOfBirth: newValue})
                }}
                value={director.dateOfBirth} className="form-control"/>

            <label>Country</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, country: newValue})
                }}
                value={director.country} className="form-control"/>


            <label>Passowrd</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, password: newValue})
                }}
                value={director.pasword} className="form-control"/>


            <label>Email</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, email: newValue})
                }}
                value={director.email} className="form-control"/>



            <button onClick={deleteDirector}>Delete</button>


            <button onClick={updateDirector}>
                Save
            </button>
            <button onClick={() => {
                    history.goBack()
                }}>Cancel</button>
            {JSON.stringify(director)}

            <div>
                <h3> Movie List Of Director {did}</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col">
                                <label>Title</label>
                                <input placeholder="title"
                       title="Please enter movie title"
                       className="form-control"
                       value={newMovie.title}
                    onChange={(e) =>
                        setNewMovie(newMovie => ({...newMovie, title: e.target.value}))}/>

                                <label>Plot</label>
                                <input placeholder="plot"
                       title="Please enter movie plot"
                       className="form-control"
                       value={newMovie.plot}
                       onChange={(e) =>
                           setNewMovie(newMovie => ({...newMovie, plot: e.target.value}))}/>

                            <label>Genre</label>
                                <input placeholder="genre"
                                       title="Please enter movie genre"
                                       className="form-control"
                                       value={newMovie.genre}
                                       onChange={(e) =>
                                           setNewMovie(newMovie => ({...newMovie, genre: e.target.value}))}/>
                            </div>
                            <div className="col-3">
                                <i className="fas fa-plus fa-2x float-right" onClick={() => createMovieForDirector(did,newMovie)}></i>
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

            </div>
        </div>

    )
}

export default DirectorEditor;