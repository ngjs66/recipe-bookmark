import React, { Component } from 'react';

export default class CreateRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            tags: []
        }

    }

    // Methods start
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
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
    // Methods end

    onSubmit(e) {
        // prevents form from changing to default after Submit button is pressed
        e.preventDefault();

        const recipe = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration
        }

        console.log(recipe)

        // brings user back to homepage after the form is submitted to db
        window.location = '/';
    }

    render() {
        return(
            <div>
                <p>You are on the Create Recipe component!</p>
            </div>
        )
    }
}