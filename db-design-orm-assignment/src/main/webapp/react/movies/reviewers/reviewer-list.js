import service from "./reviewer-service"


const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const ReviewerList = () => {
    const [reviewers, setReviewers] = useState([])
    const [newReviewer, setNewReviewer] = useState({})
    useEffect(() => {
        service.findAllReviewers()
            .then((reviewers) => {
                setReviewers(reviewers)
                // console.log(reviewers)
            })
    }, [])

    const createReviewer = (newReviewer) =>
        service.createReviewer(newReviewer)
            .then(newReviewer => {
                setNewReviewer({usrname:'',firstName:'',lastName:'',password:'',
                    level:1,email:'', dateOfBirth:new Date()})
                setReviewers(reviewers => ([...reviewers, newReviewer]))
            })



    return (
        <div>
            <h2>Reviewers</h2>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <input placeholder="username"
                                   title="Please enter your username" className="form-control" value={newReviewer.username}
                                   onChange={(e) => setNewReviewer(newReviewer => ({...newReviewer, username: e.target.value}))}/>

                            <input placeholder="firstName"
                                   title="Please enter your firstName" className="form-control" value={newReviewer.firstName}
                                   onChange={(e) => setNewReviewer(newReviewer => ({...newReviewer, firstName: e.target.value}))}/>

                            <input placeholder="lastName"
                                   title="Please enter your lastName" className="form-control" value={newReviewer.lastName}
                                   onChange={(e) => setNewReviewer(newReviewer => ({...newReviewer, lastName: e.target.value}))}/>

                            <input placeholder="password"
                                   title="Please enter your password" className="form-control" value={newReviewer.password}
                                   onChange={(e) => setNewReviewer(newReviewer => ({...newReviewer, password: e.target.value}))}/>

                            <input placeholder="email"
                                   title="Please enter your email" className="form-control" value={newReviewer.email}
                                   onChange={(e) => setNewReviewer(newReviewer => ({...newReviewer, email: e.target.value}))}/>

                            <input placeholder="1"
                                   title="Please enter your age" className="form-control" value={newReviewer.level}
                                   onChange={(e) => setNewReviewer(newReviewer => ({...newReviewer, level: e.target.value}))}/>

                            <input placeholder="2000-01-01"
                                   title="Please enter your dateOfBirth" className="form-control" value={newReviewer.dateOfBirth}
                                   onChange={(e) => setNewReviewer(newReviewer => ({...newReviewer, dateOfBirth: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createReviewer(newReviewer)}></i>
                        </div>
                    </div>
                </li>
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
        /*

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

        </div>*/

    )
}

export default ReviewerList