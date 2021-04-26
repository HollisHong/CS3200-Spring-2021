import service from "./reviewer-service"

const {useEffect, useState} = React
const {useParams} = ReactRouterDOM

const ReviewerEditor = () => {
    const [reviewer, setReviewer] = useState([])
    const {rerid} = useParams()
    
    useEffect(() => {
        service.findReviewerById(rerid)
            .then((reviewer) => {
                setReviewer(reviewer)
                //console.log(reviewer)
            })
    }, [])
    const updateReviewer = () => {
        service.updateReviewer(reviewer.id, reviewer)
    }
    return (
        <div>
            <h2>Reviewer Editor {rerid}</h2>
            <label>ID</label>
            <input value={reviewer.id} className="form-control"/>

            <label>FirstName</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReviewer({...reviewer, firstName: newValue})
                }}
                value={reviewer.firstName} className="form-control"/>

            <label>LastName</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReviewer({...reviewer, lastName: newValue})
                }}
                value={reviewer.lastName} className="form-control"/>


            <label>Level</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReviewer({...reviewer, level: newValue})
                }}
                value={reviewer.level} className="form-control"/>

            <label>dateOfBirth</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReviewer({...reviewer, dateOfBirth: newValue})
                }}
                value={reviewer.dateOfBirth} className="form-control"/>


            <label>Password</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReviewer({...reviewer, password: newValue})
                }}
                value={reviewer.password} className="form-control"/>

            <label>Email</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setReviewer({...reviewer, email: newValue})
                }}
                value={reviewer.email} className="form-control"/>


            <button>Delete</button>
            <button onClick={updateReviewer}>
                Save
            </button>

            <button>Cancel</button>
            {JSON.stringify(reviewer)}
        </div>
    )
}

export default ReviewerEditor;