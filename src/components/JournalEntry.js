import React, { Component } from 'react';

class JournalEntry extends Component {
  
    constructor (){
        super();

        this.state = {
            journalInput: '',

        }
    }

    handleJournal = (event) => {

        const writingInput = event.target.value;
    
        
        this.setState({
            journalInput: writingInput,

        })
        
        this.props.submitJournal(writingInput);
        console.log(writingInput);
        
    }

    saveLocal = (event) => {
        this.props.pushLocal(event);
    }
 



render(){
    
        return (
            <div className="journal-entry">

                <h3>{this.props.time} in Toronto on {this.props.date}</h3>

                <form 
                className="journal-form" 
                action='submit'>

                    <div className="journal">

                        <label 
                        htmlFor="form-label" className="form-label" >
                            What's got you in your feelings? Write about it here
                        </label>

                        <fieldset>

                            <textarea 
                            id="journal"
                            value={this.state.JournalInput}
                            onChange={this.handleJournal}
                            placeholder="You used to call me on my cell phone. Late night when you need my love."
                            required
                            maxLength="350"
                            rows="10"
                            cols="50"
                            wrap="hard">
                            </textarea>

                        </fieldset>

                    </div>

                    {/* <div className="reflection">

                        <fieldset className="good">

                            <label 
                            htmlFor="one-word" className="one-word">
                                Name something Too Good that happened today
                            </label>

                            <input 
                            type="text" 
                            id="one-word" 
                            placeholder="I ran through the 6 with my woes."
                            value={this.state.good}
                            onChange={this.handleJournal}
                            required>
                          
                            </input>

                        </fieldset> */}

                        {/* <fieldset className="bad">

                            <label 
                            htmlFor="one-word" className="one-word" >
                                Name one thing that had you on your Worst Behaviour
                            </label>
                            <input 
                            type="text" 
                            id="one-word" 
                            placeholder="Last night, I think I lost my patience." 
                            value={this.state.bad}
                            onChange={this.handleJournal}
                            required>
                            
                            </input>

                        </fieldset>

                    </div> */}

                </form>

                <button 
                type="submit"
                tabIndex="0"
                onClick={this.saveLocal}
                >Know Yourself
                </button>
            </div>
        );
    }


}






export default JournalEntry;



// The button on this component I want to keep in order to refactor this app with firebase in the future. For now it is for display.
