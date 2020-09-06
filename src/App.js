import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar/navbar.component";
import EditRecipe from "./components/edit-recipe/edit-recipe.component";
import RecipeList from "./components/recipe-list/recipe-list.component";
import CreateRecipe from "./components/create-recipe/create-recipe.component";
import CreateUser from "./components/create-user/create-user.component";


function App() {
  return (
    <Router>
    <div className ="container-lg">
        <Navbar />
        <br/>
        <Route path="/" exact component={RecipeList} /> 
        <Route path="/edit" component={EditRecipe} />
        <Route path="/create" component={CreateRecipe} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;

