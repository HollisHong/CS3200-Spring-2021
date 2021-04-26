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


export default {
    findAllDirectors,
    findDirectorById,
    updateDirector
}