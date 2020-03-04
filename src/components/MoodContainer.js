import React, { Component } from 'react';
import moods from '../data/moods';


class MoodContainer extends Component {
   
    constructor(){
        super();

        this.state=({
            userMood: "",

            checked: false
        })
        
    }

    getUserMood = (event) => {

        const chosenOne = event.target.value;

        
        this.props.childMood(chosenOne);

        this.setState({
            userMood: chosenOne,
            checked: !this.state.checked
        })

        
    }

    componentDidUpdate(){
      
    }
  
    render(){
        
        return (
          
            moods.map((mood, index) => {
                return (
                    <div 
                    className="mood-box" 
                    key={index} 
                    onClick={this.getUserMood}
                    tabIndex="0"
                    
                    >
                        
                        <label
                        htmlFor={`moods${index}`}>

                            {mood.mood} <br/>
                            <p>{mood.sentence}</p>
                            
                        </label>

                            <br/>

                        <input  
                        type="radio"
                        className="mood-button"
                        id={`moods${index}`}
                        value={mood.mood}
                        name="pickMood">
                        </input>
                
                    </div>
                    
                );
            })    
        );
    }
}





export default MoodContainer;



