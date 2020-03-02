import React, { Component } from 'react';
import moods from '../data/moods';

class MoodContainer extends Component {
   
    constructor(){
        super();

        this.state=({
            userMood: ""
        })
        
    }

    getUserMood = (event) => {

        const chosenOne = event.target.value;

        this.setState({
            userMood: chosenOne,
        })
       
        
    }

    

    render(){
        console.log(this.state.userMood);
        return (
          
            moods.map((mood, index) => {
                return (
                    <div className="mood-box" key={index} tabIndex="0">

                        <button 
                        className="mood-button"
                        value={mood.mood}
                        onClick={this.getUserMood}
                        >

                            {mood.mood}

                            {mood.sentence}

                        </button>

                    </div>

                );
            })
 
        )
    }
}


// THIS DISPLAYS UNDEFINED


export default MoodContainer;

// make mood a child of moodContainer
// Display the moods after the entry is submitted
// Make (Filter) a new array of just the albums I need
// Get user input (they select a mood) save that to state

// A function that exists in App.js, takes info, and passes it back to App.js
    // A function from props
     // we allow the user to select one option and remove all the others 
                // each box is the same but I want to pass in different values so  
                // pass in different individual mood using prop

//<input 
                        // type="radio" 
                        // id={mood.mood} 
                        // name="one-mood" 
                        // className="mood"
                        // value={mood.mood}
                        // required
                        // >
                        // </input>  
