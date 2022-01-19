// Packages
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import { MainNavbar } from "./components";

// Pages
import { Home, Genre, Movies, Movie, Favs } from "./pages";

// Contexts
import { langContext } from "./contexts/LanguageContext";

function App() {
  const [contextLang, setContextLang] = useState("en");

  return (
    <div className={"App bg-dark text-light"}>
      <langContext.Provider value={{ contextLang, setContextLang }}>
        <Router>
          <MainNavbar />
          <div
            className={contextLang === "ar" ? "text-end" : "text-start"}
            dir={contextLang === "ar" ? "rtl" : "ltr"}
          >
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
          </div>
        </Router>
      </langContext.Provider>
    </div>
  );
}

export default App;
