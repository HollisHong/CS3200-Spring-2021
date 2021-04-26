const MOVIE_URL = 'http://localhost:8080/api/movies'

const findAllMovies = () => {
    return fetch(MOVIE_URL)
        .then((response) => {
            return response.json()
        })
}

const findMovieById = (mid) => {
    return fetch(`${MOVIE_URL}/${mid}`)
        .then((response) => {
            return response.json()
        })
}

const updateMovie = (mid, movie) =>
    fetch(`${MOVIE_URL}/${mid}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


const createMovie = (did,movie) =>
    fetch(`${MOVIE_URL}`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



const deleteMovie = (mid) =>
    fetch(`${MOVIE_URL}/${mid}`, {
        method: "DELETE"
    })



export default {
    findAllMovies,
    findMovieById,
    updateMovie,
    createMovie,
    deleteMovie
}