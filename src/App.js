import React, { Component } from 'react';
import './App.css';

// Custom Imports 
import Header from './components/Header';
import DateForm from './components/DateForm';
import JournalEntry from './components/JournalEntry';
import Albums from './components/Albums';
import moment from 'moment';






class App extends Component {
  constructor(){
    super();

    this.state = {
      date: "",
     
    }
  }

  //Get Info from DateForm
  printDate = (e, selectDate) => {
    e.preventDefault();

    console.log('you grabbed the date from journal entry');
  }


  render (){
    
    return (

    <div className="App wrapper">
      <Header />

      
      <DateForm  
      grabDate={this.printDate}
     
      />

      <JournalEntry 
       time={moment().format("h:mm A")} 
      />
      


      <Albums />
 

    </div>
    );
  }
  
}

export default App;


// The constructor is a method that’s automatically called during the creation of an object from a class.
// this used in constructor always refers to the constructor object and aLWAYS contains the props property

// Credits
// A big shoutout to the Gratitude Journal example by Alexandra Lim for a flow, and imports to help create this project