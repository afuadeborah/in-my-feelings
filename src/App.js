import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';

// Custom Imports 
import JournalEntry from './components/JournalEntry';
import MoodContainer from './components/MoodContainer';
import Footer from './components/Footer';
import firebase from './components/firebase';








class App extends Component {
  constructor(){
    super();

    this.state = {
      
      albumInfo: [],

      result: [],

      displayName: "",

      userEntries: [],

      dbRef: firebase.database().ref(),
    }
  }




  // Axios API Call & Firebase Setup
  componentDidMount (){
  // Firebase

    // Event Listener when changes are made to database
    this.state.dbRef.on('value', entry => {

      const newState = [];
      // Hold the journalEntries state here in this scope

      const data = entry.val();
      // Holds the actual info we're putting into the database

      // data is an OBJECT, loop through it to access each entry
      for (let key in data) {
        newState.push({

          id: key,

          entry: data[key]

        });
      }
      // Push each entry to the newState array

      this.setState({
        userEntries: newState,
      });
      
    });

    



    // Axios API Call
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

    const newAlbumArray = [...albumArray];


// Grab the six albums I want to work with
    const sixArray = newAlbumArray.slice(1,7);
    // go into this and add on a mood porperty

// Duplicate the original array and add the mood as a new object
    const newSixArray = [...sixArray];

      newSixArray.map((entry) => {
        
        if(entry.name === "Views"){
          return entry.albumMood = "Happy";

        } else if (entry.name === "Take Care"){
          return entry.albumMood = "Upset";

        } else if (entry.name === "Thank Me Later"){
          return entry.albumMood = "Unsure";

        } else if (entry.name === "Nothing Was the Same"){
          return entry.albumMood = "Confident";

        } else if (entry.name === "Scorpion"){
          return entry.albumMood = "Angry";

        } else if (entry.name === "More Life"){
          return entry.albumMood = "Romantic";
        }

          return newSixArray;
        });
        
    this.setState({
      albumInfo: newSixArray,
    })

  })
}


// Display user's name 

  handleName = (name) => {
    const inputName = name.target.value;
    
    this.setState({
    displayName: inputName,

    });

    

  }

// Prevent page from reloading and resetting state when we click Go.
// This button will be used to push information into Firebase for future rework
  beginJournal = (e) => {
    e.preventDefault();

    const dbRef = firebase.database().ref("Users/" + this.state.displayName);

    dbRef.set({
      currentTime: '',
      currentDate: '',
      userName: this.state.displayName,
      albumOfDay: '',
      mood: '',
      journalEntry: '',
    })

    
  }

  pushTimeandDate = (e) => {
  
    const userTime = moment().format("h A");
    const userDate= moment().format("MMMM D");

    const dbRef = firebase.database().ref("Users/" + this.state.displayName);

    dbRef.update({ 
      currentDate: userDate,
      currentTime: userTime,
    });
    
  }

  writeEntry = (event) => {
    // event.preventDefault();
    const dbRef = firebase.database().ref("Users/" + this.state.displayName);


    dbRef.update({
      journalEntry: event,
    })


  }



// Display album that corresponds with mood and set to state

  displayAlbumResult = (userSelectedMood) => {
    const finalResult = this.state.albumInfo.filter((album) => {
      return album.albumMood === userSelectedMood;

    })

    this.setState({
      result: finalResult,
    });
    
    console.log(finalResult);
  

    // To update Firebase
    const moodAlbum = finalResult[0].name;
    const chosenMood = finalResult[0].albumMood;

    
    const dbRef = firebase.database().ref("Users/" + this.state.displayName);

    dbRef.update({ 
      albumOfDay: moodAlbum,
      mood: chosenMood
    });
    
    
  }
 // Go through each mood in the albumInfo array. If the mood we pushed into the axios API object matches the mood we click on, push this mood into the emoty result array and set the result state to the mood.


// Clear journal and selected mood and start over
  startOver = () => {

    this.setState({
      result: [],
      displayName: "",
      journalEntries: [],

    })

  }




  render (){
    
    return (

    <div className="App wrapper">
      <header>
   
        <h1>In My Feelings</h1>
        
        <h2>Get a Drake album to match your mood</h2>
        
      </header>

      
      <div className="name-entry">

                
        <form className="enter-info" >

          <label htmlFor="enter-name">What's My Name?</label>

          <input 
              type="text" 
              id="enter-name" 
              placeholder="Kiki" 
              value={this.state.displayName}
              onChange = {this.handleName}
              required
              tabIndex="0"
          />
          
          <button 
          onClick={this.beginJournal}
          type="submit"
          tabIndex="0"
          >Go</button>

        </form>

        {this.state.displayName ? <h2 className="welcome">Welcome, {this.state.displayName}</h2> : null}

      </div>

      
      <JournalEntry 
       time={moment().format("h A")}
       date={moment().format("MMMM D")}
       pushLocal={this.pushTimeandDate}
       submitJournal={this.writeEntry}/>
      
      <div className="mood-entry">
        <h2>Choose a mood below.</h2>
        <div className="mood-container">
          <MoodContainer 
            childMood={this.displayAlbumResult} />
        </div>
      </div>


      <div className="album-container">

        {this.state.result.map((album, index) => {

          return (
            <div 
            key={index} 
            className="result-box" >
              <h2>So you're feeling {album.albumMood}</h2>

              <h3>Click the cover to listen to {album.name}</h3>

              <a href={album.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                tabIndex="0">
                  
                <img src={album.image[3]["#text"]} 
                  alt={`Cover of ${album.name} with a link to lastfm.com`}
                  title={`Play ${album.name} on Lastfm.com`}
                  tabIndex="0"/>
              </a>

              <button
              onClick={this.startOver}
              >Start Over</button>

            </div>

          );

        })}

      </div>

      <Footer />

    </div>
    // .App Scope Ends 
  

    );
  } 
}

export default App;

// Credits
// A big shoutout to the Gratitude Journal example by Alexandra Lim for a flow, and imports to help create this project


