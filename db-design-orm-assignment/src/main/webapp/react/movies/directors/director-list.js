import service from "./director-service"

const {useEffect, useState} = React
const {Link} = ReactRouterDOM

const DirectorList = () => {
    const [directors, setDirectors] = useState([])
    useEffect(() => {
        service.findAllDirectors()
            .then((directors) => {
                setDirectors(directors)
                // console.log(directors)
            })
    }, [])
    return (
        <div>
            <h2>Director List</h2>
            <ul className="list-group">
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
            {JSON.stringify(directors)}
        </div>
    )
}

export default DirectorList