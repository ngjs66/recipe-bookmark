import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return   (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand">Recipe Bookmark</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">Recipes</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Recipe</Link>
                </li>
                <li className="navbar-item">
                <Link to="/edit" className="nav-link">Edit Recipe</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link">Create User</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
  }
}
            // <form className="form-inline">
            //     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            //     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            // </form>