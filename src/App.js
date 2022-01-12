// Packages
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { MainNavbar } from "./components";

// Pages
import { Home, Genre, Movies, Movie, Favs } from "./pages";

function App() {
  return (
    <div className="App bg-dark text-light">
      <Router>
        <MainNavbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            exact
            path="/genre/:genreName/:pageNum"
            component={Genre}
          ></Route>
          <Route exact path="/movies/:pageNum" component={Movies}></Route>
          <Route exact path="/movie/:movieId" component={Movie}></Route>
          <Route exact path="/favorites" component={Favs}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
