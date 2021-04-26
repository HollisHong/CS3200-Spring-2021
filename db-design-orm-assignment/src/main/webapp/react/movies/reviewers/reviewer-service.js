const REVIEWER_URL = 'http://localhost:8080/api/reviewers'

const findAllReviewers = () => {
    return fetch(REVIEWER_URL)
        .then((response) => {
            return response.json()
        })
}

const findReviewerById = (rerid) => {
    return fetch(`${REVIEWER_URL}/${rerid}`)
        .then((response) => {
            return response.json()
        })
}

const updateReviewer = (rerid, reviewer) =>
    fetch(`${REVIEWER_URL}/${rerid}`, {
        method: 'PUT',
        body: JSON.stringify(reviewer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())


const createReviewer = (reviewer) =>
    fetch(`${REVIEWER_URL}`, {
        method: 'POST',
        body: JSON.stringify(reviewer),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



const deleteReviewer = (rerid) =>
    fetch(`${REVIEWER_URL}/${rerid}`, {
        method: 'DELETE',
        headers: {'content-type': 'application/json'}
    })



export default {
    findAllReviewers,
    findReviewerById,
    updateReviewer,
    createReviewer,
    deleteReviewer
}