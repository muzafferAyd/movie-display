import React from "react";

import {Route, Switch} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import About from "./pages/About";
import Movie from "./pages/Movie";


const App = () => {
  return (
    <Switch>
        <Route path="/about" component={About} exact/>
        <Route path="/detail" component={MovieDetail} exact/>
        <Route path="/" component={Movie} />
    </Switch>


  );
};

export default App;
