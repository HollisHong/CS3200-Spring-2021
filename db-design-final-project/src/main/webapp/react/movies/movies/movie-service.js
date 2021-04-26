const MOVIE_URL = 'http://localhost:8080/api/movies'
const DIRECTOR_URL = 'http://localhost:8080/api/directors'

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

/*const findAllMoviesForDirector = (did) => {
    console.log("find all for d")
    return fetch(`${DIRECTOR_URL}/${did}/movies`)
        .then((response) => {
            return response.json()
        })
    }*/


const updateMovie = (mid, movie) =>
    fetch(`${MOVIE_URL}/${mid}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())






const deleteMovie = (mid) =>
    fetch(`${MOVIE_URL}/${mid}`, {
        method: "DELETE"
    })


const findAllReviewsForMovie = (mid) => {
    return fetch(`${MOVIE_URL}/${mid}/reviews`)
        .then((response) => {
            return response.json()
        })
}

const createReviewForMovie = (mid,review) =>
    fetch(`${MOVIE_URL}/${mid}/reviews`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



export default {
    findAllMovies,
    findMovieById,
    updateMovie,
    deleteMovie,
    findAllReviewsForMovie,
    createReviewForMovie
}