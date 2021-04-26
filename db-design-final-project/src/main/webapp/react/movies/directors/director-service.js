const DIRECTOR_URL = 'http://localhost:8080/api/directors'

const findAllDirectors = () => {
    return fetch(DIRECTOR_URL)
        .then((response) => {
            return response.json()
        })
}

const findDirectorById = (did) => {
    return fetch(`${DIRECTOR_URL}/${did}`)
        .then((response) => {
            return response.json()
        })
}

const updateDirector = (did, director) =>
    fetch(`${DIRECTOR_URL}/${did}`, {
        method: 'PUT',
        body: JSON.stringify(director),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const createDirector = (director) =>
    fetch(`${DIRECTOR_URL}`, {
        method: 'POST',
        body: JSON.stringify(director),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



const deleteDirector = (did) =>
    fetch(`${DIRECTOR_URL}/${did}`, {
        method: 'DELETE'
    })


const findAllMoviesForDirector = (did) => {
    console.log("find all for d")
    return fetch(`${DIRECTOR_URL}/${did}/movies`)
        .then((response) => {
            return response.json()
        })
    

}

const createMovieForDirector = (did,movie) =>
    fetch(`${DIRECTOR_URL}/${did}/movies`, {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



export default {
    findAllDirectors,
    findDirectorById,
    updateDirector,
    createDirector,
    deleteDirector,
    createMovieForDirector,
    findAllMoviesForDirector
}