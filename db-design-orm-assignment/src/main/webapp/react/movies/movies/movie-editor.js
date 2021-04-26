import service from "./movie-service"

const {useEffect, useState} = React
const {useParams} = ReactRouterDOM

const MovieEditor = () => {
    const [movie, setMovie] = useState([])
    const {mid} = useParams()
    useEffect(() => {
        service.findMovieById(mid)
            .then((movie) => {
                setMovie(movie)
                //console.log(movie)
            })
    }, [])
    const updateMovie = () => {
        service.updateMovie(movie.id, movie)
    }
    return (
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

            <label>Genre</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setMovie({...movie, genre: newValue})
                }}
                value={movie.genre} className="form-control"/>



            <button>Delete</button>
            <button onClick={updateMovie}>
                Save
            </button>
            <button>Create</button>
            <button>Cancel</button>
            {JSON.stringify(movie)}
        </div>
    )
}

export default MovieEditor;