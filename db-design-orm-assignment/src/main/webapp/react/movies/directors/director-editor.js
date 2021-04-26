import service from "./director-service"

const {useEffect, useState} = React
const {useParams} = ReactRouterDOM

const DirectorEditor = () => {
    const [director, setDirector] = useState([])
    const {did} = useParams()
    useEffect(() => {
        service.findDirectorById(did)
            .then((director) => {
                setDirector(director)
            })
    }, [])
    const updateDirector = () => {
        service.updateDirector(director.id, director)
    }
    return (
        <div>
            <h2>Director Editor {did}</h2>
            <label>ID</label>
            <input value={director.id} className="form-control"/>
            <label>Username</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, username: newValue})
                }}
                value={director.username} className="form-control"/>

            <label>FirstName</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, firstName: newValue})
                }}
                value={director.firstName} className="form-control"/>

            <label>LastName</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, lastName: newValue})
                }}
                value={director.lastName} className="form-control"/>

            <label>Age</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, age: newValue})
                }}
                value={director.age} className="form-control"/>

            <label>dateOfBirth</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, dateOfBirth: newValue})
                }}
                value={director.dateOfBirth} className="form-control"/>

            <label>Country</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, country: newValue})
                }}
                value={director.country} className="form-control"/>


            <label>Passowrd</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, password: newValue})
                }}
                value={director.pasword} className="form-control"/>


            <label>Email</label>
            <input
                onChange={(e) => {
                    const newValue = e.target.value
                    setDirector({...director, email: newValue})
                }}
                value={director.email} className="form-control"/>



            <button>Delete</button>

            <button onClick={updateDirector}>
                Save
            </button>
            <button>Create</button>
            <button>Cancel</button>
            {JSON.stringify(director)}
        </div>
    )
}

export default DirectorEditor;