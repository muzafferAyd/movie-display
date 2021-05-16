import React from "react";

import { Route, Switch } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import About from "./pages/About";
import Movie from "./pages/Movie";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import { StyledAppContainer, StyledContextContainer } from "./App.style.js";

const App = () => {
  return (
    <StyledAppContainer>
      <Navbar />
      <StyledContextContainer>
        <Switch>
          <Route path="/about" component={About} exact />
          <Route path="/detail/:id" component={MovieDetail} exact />
          <Route path="/" component={Movie} />
        </Switch>{" "}
      </StyledContextContainer>
      <Footer />
    </StyledAppContainer>
  );
};

export default App;
