const REVIEW_URL = 'http://localhost:8080/api/reviews'

const findAllReviews = () => {
    return fetch(REVIEW_URL)
        .then((response) => {
            return response.json()
        })
}

const findReviewById = (rid) => {
    return fetch(`${REVIEW_URL}/${rid}`)
        .then((response) => {
            return response.json()
        })
}

const updateReview = (rid, review) =>
    fetch(`${REVIEW_URL}/${rid}`, {
        method: 'PUT',
        body: JSON.stringify(review),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

const createReview = (review) =>
    fetch(`${REVIEW_URL}`, {
        method: 'POST',
        body: JSON.stringify(review),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())



const deleteReview = (rid) =>
    fetch(`${REVIEW_URL}/${rid}`, {
        method: "DELETE"
    })



export default {
    findAllReviews,
    findReviewById,
    updateReview,
    createReview,
    deleteReview
}