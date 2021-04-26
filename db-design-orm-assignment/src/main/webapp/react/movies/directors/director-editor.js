import service from "./director-service"
import Mservice from "../movies/movie-service"

const {useEffect, useState} = React
const {useParams, useHistory} = ReactRouterDOM

const DirectorEditor = () => {
    const [director, setDirector] = useState([])
    const [movies, setMovies] = useState([])
    const {did} = useParams()
    const history = useHistory()
    useEffect(() => {


        service.findDirectorById(did)
            .then((director) => {
                setDirector(director)
            })
    }, [])
    useEffect(() => {
        Mservice.findAllMoviesForDirector(did)
            .then((movies) => {
                setMovies(movies)
                // console.log(movies)
            })
    }, [])


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
                <button>Add Movie</button>
            </div>
        </div>

    )
}

export default DirectorEditor;