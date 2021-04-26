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
    const updateDirectorName = () => {
        service.updateDirectorName(director.id, director.username)
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
                    setDirector({...Director, username: newValue})
                }}
                value={director.username} className="form-control"/>
            <button>Delete</button>
            <button onClick={updateDirectorName}>
                Save
            </button>
            <button>Create</button>
            <button>Cancel</button>
            {JSON.stringify(director)}
        </div>
    )
}

export default DirectorEditor;