import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Recipe = props => (
    <tr>
        <td>{props.recipe.username}</td>
        <td>{props.recipe.recipeName}</td>
        <td>{props.recipe.description}</td>
        <td>{props.recipe.duration}</td>
        <td>{props.recipe.date}</td>
        <td>
            <Link to={/edit/+props.recipe._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRecipe(props.recipe._id) }}>delete</a>
        </td>
    </tr>
)

export default class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.deleteRecipe = this.deleteRecipe.bind(this)

        this.state = {recipes: []};
    }

    // Method start
    componentDidMount() {
        axios.get('http://localhost:5000/recipes/')
            .then(response => {
                this.setState({ recipes: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteRecipe(id) {
        axios.delete('http://localhost:5000/recipes/'+id)
            .then(response => { console.log(response.data)});
            
        this.setState({
            recipes: this.state.recipes.filter(el => el._id !== id)
        })
    }

    recipeList() {
        return this.state.recipes.map(currentrecipe => {
            return <Recipe recipe={currentrecipe} deleteRecipe={this.deleteRecipe} key={currentrecipe._id}/>;
        })
    }
    // Method end

    render() {
        return (
            <div>
                <h3>Recipes</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Recipe</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.recipeList()} 
                    </tbody>
                </table>
            </div>
        )
    }
}