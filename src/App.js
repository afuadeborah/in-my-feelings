import React, { Component } from 'react';
import './App.css';

// Custom Imports 
import Header from './components/Header';
import DateForm from './components/DateForm';
import JournalEntry from './components/JournalEntry';
import MoodContainer from './components/MoodContainer';
import Albums from './components/Albums';
import axios from 'axios';
import moment from 'moment';







class App extends Component {
  constructor(){
    super();

    this.state = {
      moods: ["Upset", "Happy", "Unsure", "Angry", "Romantic", "Confident"],

      sentence: ["Getting right into dem feelings.", "Right now it's all good on your end.", "You're feeling a little anxious today.", "Not the time.", "Feelin the love, lovin the feeling.", "You're in the building and you're feeling yourself."],

      albumInfo: [],

    }
  }

  // Axios API Call
  componentDidMount (){
    const apiKey = 'a0b4a2a68217ad3b52fe53e7b7ba0679';

    axios({
        url: 'http://ws.audioscrobbler.com/2.0/',
        method: 'GET',
        responseType: 'json',
        params: {
            api_key: apiKey,
            method: 'artist.gettopalbums',
            artist: 'drake',
            format: 'json'
        }  
    }).then((response) => {

// Manipulate information from the API call 
        const albumArray = response.data.topalbums.album

        // Change the initial state 
        this.setState({
                albumInfo: albumArray,
            })
        
        console.log(albumArray);
    })
}

// Get Info from DateForm
  printDate = (e, selectDate) => {
    e.preventDefault();
    
    console.log('you grabbed the date from journal entry');
    console.log(selectDate);
  }



  render (){
    
    return (

    <div className="App wrapper">
      <Header />

      
      <DateForm  
      grabDate={this.printDate}
      />

      <JournalEntry 
       time={moment().format("h A")}
        
      />
      
      <div className="mood-entry">
        <h2>Choose a mood below.</h2>
        <div className="mood-container">
          <MoodContainer 
          />
        </div>
      </div>


      <div className="album-container">
        <h2>Listen to </h2>

      <Albums />

      </div>
 

    </div>
    );
  }
  
}

export default App;


// The constructor is a method that’s automatically called during the creation of an object from a class.
// this used in constructor always refers to the constructor object and aLWAYS contains the props property

// Credits
// A big shoutout to the Gratitude Journal example by Alexandra Lim for a flow, and imports to help create this project

//  <div className="styleMood">
//           {this.state.moods.map((oneMood, index) => {
//             return (

//               <MoodContainer
//               moodName={oneMood}
//               index={index}
//               removeMood={this.chooseMood}
//               />
//             )
//           })}
//         </div> 

// Select Mood from Screen
  // chooseMood = (index) => {
    
  //   const newMoods = [...this.state.moods];
  //   const newSentence = [...this.state.sentence];

  //   const updatedMoods = newMoods.filter((oneNewMood, i) => {
  //     if (i !== index){
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })

  //   const updatedSentence = newSentence.filter((oneSentence, i) => {
  //     if (i !== index){
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
    
  //   // If the index one newMood doesn't match the index(i) of updatedMoods return true, keep it in the old array and go on to the next park (index).

  //   this.setState({
  //     moods: updatedMoods,
  //     sentence: updatedSentence
  //   })
  //   // Reset the state to an empty array

  // }
 
  // To get mood values from MoodContainer component
  
  
  // getMoodValue = (event, selectedMood) => {
  //   event.preventDefault();
  //   this.setState({
  //     moods: event.target.value
  //   })
  // }