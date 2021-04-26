import service from "./reviewer-service"


const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const ReviewerList = () => {
    const [reviewers, setReviewers] = useState([])
    useEffect(() => {
        service.findAllReviewers()
            .then((reviewers) => {
                setReviewers(reviewers)
                // console.log(reviewers)
            })
    }, [])
    return (

        <div>
            <h2>Reviewer List</h2>
            <ul className="list-group">
                {
                    reviewers.map((reviewer) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/reviewers/${reviewer.id}`}>
                                    {reviewer.username}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            {JSON.stringify(reviewers)}

        </div>

    )
}

export default ReviewerList