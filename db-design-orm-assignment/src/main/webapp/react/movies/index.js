
import DirectorList from "./directors/director-list";
import DirectorEditor from "./directors/director-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    return (
        <div className="container-fluid">
            <h1>Movie Database</h1>
            <HashRouter>
                <Route path={["/directors", "/"]} exact={true}>
                    <DirectorList/>
                </Route>
                <Route path="/directors/:did" exact={true}>
                    <DirectorEditor/>
                </Route>
            </HashRouter>
        </div>
    );
}

export default App;
