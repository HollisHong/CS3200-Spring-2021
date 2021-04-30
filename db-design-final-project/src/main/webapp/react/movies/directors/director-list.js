import service from "./director-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const DirectorList = () => {
    const [directors, setDirectors] = useState([])
    const[newDirector, setNewDirector] = useState({})
    useEffect(() => {
        service.findAllDirectors()
            .then((directors) => {
                setDirectors(directors)
            })
    }, [])

    const createDirector = (newDirector) =>
        service.createDirector(newDirector)
            .then(newDirector => {
                setNewDirector({usrname:'',firstName:'',lastName:'',password:'',
                    country:'',email:'',age:0, dateOfBirth:new Date()})
                setDirectors(directors => ([...directors, newDirector]))
            })


    return (
        <div>
            <h2>Director List</h2>

            <h5>Add a Director</h5>
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="row">
                        <div className="col">
                            <label>Username</label>
                            <input placeholder="username"
                                   title="Please enter your username" className="form-control" value={newDirector.username}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, username: e.target.value}))}/>

                            <label>FirstName</label>
                            <input placeholder="firstName"
                                   title="Please enter your firstName" className="form-control" value={newDirector.firstName}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, firstName: e.target.value}))}/>

                            <label>LastName</label>
                            <input placeholder="lastName"
                                   title="Please enter your lastName" className="form-control" value={newDirector.lastName}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, lastName: e.target.value}))}/>

                            <label>Password</label>
                            <input placeholder="password"
                                   title="Please enter your password" className="form-control" value={newDirector.password}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, password: e.target.value}))}/>

                            <label>Country</label>
                            <input placeholder="country"
                                   title="Please enter your country" className="form-control" value={newDirector.country}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, country: e.target.value}))}/>

                            <label>Email</label>
                            <input placeholder="email"
                                   title="Please enter your email" className="form-control" value={newDirector.email}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, email: e.target.value}))}/>

                            <label>Age</label>
                            <input placeholder="0"
                                   title="Please enter your age" className="form-control" value={newDirector.age}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, age: e.target.value}))}/>

                            <label>Birthday</label>
                            <input placeholder="2000-01-01"
                                   title="Please enter your dateOfBirth" className="form-control" value={newDirector.dateOfBirth}
                                   onChange={(e) => setNewDirector(newDirector => ({...newDirector, dateOfBirth: e.target.value}))}/>
                        </div>
                        <div className="col-3">
                            <i className="fas fa-plus fa-2x float-right" onClick={() => createDirector(newDirector)}></i>
                        </div>
                    </div>
                </li>
                {
                    directors.map((director) => {
                        return (
                            <li className="list-group-item">
                                <Link to={`/directors/${director.id}`}>
                                    {director.username}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>)

}

export default DirectorList