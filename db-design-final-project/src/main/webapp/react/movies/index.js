
import DirectorList from "./directors/director-list";
import DirectorEditor from "./directors/director-editor";
import MovieList from "./movies/movie-list";
import MovieEditor from "./movies/movie-editor";
import ReviewList from "./reviews/review-list";
import ReviewEditor from "./reviews/review-editor";
import ReviewerList from "./reviewers/reviewer-list";
import ReviewerEditor from "./reviewers/reviewer-editor";
import ReviewerCreater from "./reviewers/reviewer-creater";

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

                <Route path={["/movies", "/"]} exact={true}>
                    <MovieList/>
                </Route>
                <Route path="/movies/:mid" exact={true}>
                    <MovieEditor/>
                </Route>

                <Route path={["/reviews", "/"]} exact={true}>
                    <ReviewList/>
                </Route>
                <Route path="/reviews/:rid" exact={true}>
                    <ReviewEditor/>
                </Route>


            </HashRouter>
        </div>
    );
}

export default App;
