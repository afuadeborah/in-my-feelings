import React, { Component }  from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

class DateForm extends Component {

    render (){
        return (
            <div className="date-entry">
                <form className="select-date">
                    <label htmlFor="date-select">Today is:</label>
                    <input type="date" id="date-select" placeholder="MM-DD-YYYY" required/>
                    <button type="submit">Go</button>
                </form>
            </div>
        );
    }
}




export default DateForm;

// make use of toDateString
// https://tecadmin.net/get-current-date-time-javascript/