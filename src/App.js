import React, { Component } from 'react';
import './App.css';

// Custom Imports 
import Header from './components/Header';
import JournalEntry from './components/JournalEntry';
import MoodContainer from './components/MoodContainer';
import Footer from './components/Footer';
import axios from 'axios';
import moment from 'moment';







class App extends Component {
  constructor(){
    super();

    this.state = {
      
      albumInfo: [],

      result: [],

      displayName: ""

    }
  }




  // Axios API Call
  componentDidMount (){
    const apiKey = 'a0b4a2a68217ad3b52fe53e7b7ba0679';

    axios({
        url: 'https://ws.audioscrobbler.com/2.0/',
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


// Toggle display after form entry

  handleName = (name) => {
    const inputName = name.target.value;
    
    this.setState({
    displayName: inputName,

    })

  }

// Prevent page from reloading and resetting state when we click Go.
// This button will be used to push information into Firebase for future rework
  beginJournal = (e) => {
    e.preventDefault();
    
  }

// Display album that corresponds with mood and set to state

 displayAlbumResult = (userSelectedMood) => {
   const finalResult = this.state.albumInfo.filter((album) => {
    return album.albumMood === userSelectedMood;

   })

   this.setState({
     result: finalResult,
   })   
 }


// Clear selected mood and choose another
  startOver = () => {

    this.setState({
      result: [],
    })

  }




  render (){
    
    return (

    <div className="App wrapper">
      <Header />

      
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
      />
      
      <div className="mood-entry">
        <h2>Choose a mood below.</h2>
        <div className="mood-container">
          <MoodContainer 
            childMood={this.displayAlbumResult}  
          />
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


