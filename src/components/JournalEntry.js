import React, { Component } from 'react';

class JournalEntry extends Component {
  
    
 



render(){
    
        return (
            <div className="journal-entry">

        <h3><span>{this.props.time}</span> in Toronto on {this.props.date}</h3>

                <form className="journal-form" action='submit'>
                    <div className="journal">
                        <label htmlFor="form-label" className="form-label" >What's got you in your feelings? Write about it here</label>
                        <fieldset>
                            <textarea 
                            id="journal"
                            placeholder="You used to call me on my cell phone. Late night when you need my love."
                            required
                            maxLength="350"
                            rows="5"
                            cols="50"
                            wrap="hard">
                            </textarea>
                        </fieldset>
                    </div>
                    <div className="reflection">
                        <fieldset className="good">
                            <label htmlFor="one-word" className="one-word">Name something Too Good that happened today</label>
                            <input type="text" id="one-word" placeholder="I ran through the 6 with my woes."
                            required></input>
                        </fieldset>

                        <fieldset className="bad">
                            <label htmlFor="one-word" className="one-word" >Name one thing that had you on your Worst Behaviour</label>
                            <input type="text" id="one-word" placeholder="Last night, I think I lost my patience." required></input>
                        </fieldset>
                    </div>
                </form>

                <button 
                type="submit"
                tabIndex="0"
                >Know Yourself</button>
            </div>
        );
    }


}






export default JournalEntry;



// The button on this component I want to keep in order to refactor this app with firebase in the future. For now it is for display.
