import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateRecipe extends Component {
    // super(props) allows us to use props of constructor
    constructor(props) {
        super(props);

        // points "this.state" to class CreateRecipe
        this.onChangeRecipename = this.onChangeRecipename.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            recipeName: '',
            description: '',
            duration: 0,
            date: new Date(),
            tags: []
        }

    }

    // Methods start
    componentDidMount() {  // React lifecycle method; called before anything displays on page
        this.setState ({
            recipeName:'Input recipe name',
            description: 'What is in it?',
            tags: ['Pasta', 'Pizza', 'Burger', 'Noodles']
        })
    }

    onChangeRecipename(e) {
        this.setState({
            recipeName: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeDuration(e) {
        this.setState({
            duration: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        })
    }
    
    onSubmit(e) {
        // prevents form (on our webpage) from changing to default after Submit button is pressed
        e.preventDefault();
        
        const recipes = {
            recipeName: this.state.recipeName,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        
        console.log(recipes)
        
        // brings user back to homepage after the form is submitted to db
        window.location = '/';
    }
    // Methods end

    render() {
        return(
        <div>
            <h3>Create New Recipe</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Name of Recipe: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.recipeName}
                        onChange={this.onChangeRecipename}
                        />
                </div>
                <div className="form-group"> 
                    <label>Description: </label>
                    <input  type="text"
                        required
                        className="form-control"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        />
                </div>
                <div className="form-group">
                    <label>Cooking duration/time (in minutes): </label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={this.state.duration}
                        onChange={this.onChangeDuration}
                        />
                </div>
                <div className="form-group"> 
                    <label>Tags: </label>
                    <select ref="userInput"
                        required
                        className="form-control"
                        value={this.state.recipeName}
                        onChange={this.onChangeRecipename}>
                        {   
                            this.state.tags.map(function(tag) {
                                return <option 
                                    key={tag}
                                    value={tag}>{tag}
                                    </option>;
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Date (of upload): </label>
                    <div>
                        <DatePicker
                          selected={this.state.date}
                          onChange={this.onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Save Recipe" className="btn btn-primary" />
                </div>
            </form>
          </div>
        )
    }
}