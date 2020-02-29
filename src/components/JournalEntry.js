import React, { Component } from 'react';
// import moment from 'moment';

class JournalEntry extends Component {
    constructor(){
        super();

        this.state = {
            date: "",
            time: "",
        };
    }

    render(){
        return (
            <div className="journal-entry">
                <h3> in Toronto on {this.state.date}</h3>


                <form className="journal-form" action='submit'>
                    <label htmlFor="form-label" className="form-label" >What's got you in your feelings? Write about it here</label>
                    <fieldset>
                        <textarea 
                        id="journal"
                        placeholder="Kiki, do you love me? Are you riding? Say you'll never ever leave from beside me, 'Cause I want ya, and I need ya, And I'm down for you always."
                        required
                        maxLength="40"
                        rows="5"
                        cols="50"
                        wrap="hard">
                        </textarea>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="one-word" className="one-word">Name something Too Good that happened today</label>
                        <input type="text" id="one-word" placeholder="I ran through the 6 with my woes."
                        required></input>
                    </fieldset>

                    <fieldset>
                        <label htmlFor="one-word" className="one-word" >Name one thing that had you on your Worst Behaviour</label>
                        <input type="text" id="one-word" placeholder="Last night, I think I lost my patience." required></input>
                    </fieldset>

                    <button type="submit">Know Yourself</button>

                </form>
            </div>
        );
    }


}






export default JournalEntry;

// make the textarea smaller
// add in a text inputs for a prompt
    // One word to describe today
    // I'm grateful for
    // I'm a likkle cheesed about
    // Long talk 
