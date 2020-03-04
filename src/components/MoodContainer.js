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

        // if(!this.state.checked && )
        
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
                        htmlFor={`moods${index}`}
                        >
                            {mood.mood} <br/>
                            <p>{mood.sentence}</p>
                        </label>
                            <br/>
                        <input  
                        type="radio"
                        className="mood-button"
                        id={`moods${index}`}
                        value={mood.mood}
                        name="pickMood"
                        
                        
                        >
                        </input>
                
                    </div>
                    
                );
            })    
        );
    }
}





export default MoodContainer;



// <div 
//                     className="mood-box" 
//                     key={index} 
//                     tabIndex="0" >

//                         <button 
//                         className={`mood-button ${this.state.dimButton}`}
//                         value={mood.mood}
//                         onClick={this.getUserMood}
//                         // style={({opacity: this.state.toggleMoods ? 1 : 0.4})}
//                         // add class and another one later in the cascade
                        
//                         >
                            

//                             {mood.mood} <br/>
//                             {mood.sentence}

//                         </button>
                
//                     </div>

// don't put label inside input
//match ids in order to access selections
//${this.state.dimButton}ß

