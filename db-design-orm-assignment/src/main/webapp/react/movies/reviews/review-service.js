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



export default {
    findAllReviews,
    findReviewById,
    updateReview
}