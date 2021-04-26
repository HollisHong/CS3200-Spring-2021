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

const updateDirectorName = (did, newDirectorName) => {
    return fetch(`${DIRECTOR_URL}/${did}/name/${newDirectorName}`)
        .then((response) => {
            return response.json()
        })
}

export default {
    findAllDirectors,
    findDirectorById,
    updateDirectorName
}