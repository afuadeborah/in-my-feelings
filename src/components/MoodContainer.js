import React, { Component } from 'react';

class MoodContainer extends Component {
    constructor (){
        super();

        this.state = {};
        // A select and removal event will occur here
    }
    
//ComponentDidMount
    // Select Handler
    // Removal Handler

    render(){
        return (
            <div className="mood-entry">
                <h2>Since we're in our feelings, choose a mood below.</h2>
                <ul className="mood-container">
                    {/* we allow the user to select one option and remove all the others */}
                    {/* each box is the same but I want to pass in different values so  */}
                    <li className="mood"></li>
                    {/* pass in different individual mood using prop*/}
                </ul>

            </div>

        );
    }
}



export default MoodContainer;

// make mood a child of moodContainer
// Display the moods after the entry is submitted
// Make (Filter) a new array of just the albums I need
// Get user input (they select a mood) save that to state
// I need a ul with 6 different moods 
    // Each option in the ul will be properties inside of the API call
    // Make the last one a randomizer?
// A function that exists in App.js, takes info, and passes it back to App.js
    // A function from props