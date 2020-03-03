import React, { Component }  from 'react';
// import moment from 'moment';



class DateForm extends Component {

    constructor(){
        super();

        this.state = {
            selectDate: "",
            userSubmitDate: ""
            // time: "",

        }

        console.log(this);
    }


// Grab date from main page and extract the value
  handleDate = (e) => {
    
    this.setState({
      selectDate: e.target.value,
      
    })
    console.log(e.target.value);
}

    


   


    render (){
 
        
        return (
            <div className="date-entry">

                
                <form className="select-date" >

                    <label htmlFor="date-select">Today is:</label>

                    <input 
                        type="date" 
                        id="date-select" 
                        placeholder="MM-DD-YYYY" 
                        required
                        value={this.state.selectDate}
                        onChange = {this.handleDate}
                        tabIndex="0"
                    />

                    <button 
                    onClick={this.printDate}
                    type="submit"
                    tabIndex="0"
                    >Go</button>

                </form>
                {/* set a ternerary based on whether or date is on page in state */}
                {this.state.selectDate ? <h3>{this.state.selectDate}</h3> : null }
                    

            </div>
        );
    }
}




export default DateForm;

// make use of toDateString
// https://tecadmin.net/get-current-date-time-javascript/
// May not need this component if moment works
// Save this in case but maybe change this to just a landing page with a picture/log in and save the date for the next page